#!/usr/bin/env python3
# bot.py
import os
import sys
import requests
import discord
from dotenv import load_dotenv

load_dotenv()
TOKEN = os.getenv('DISCORD_TOKEN')

client = discord.Client()

def get_prediction(img):
    url = 'http://164.92.212.85/api/predict'
    image = {'file': img}
    resp=requests.post(url, files=image)
    return resp.json()

def clean_output(dict):
    res = dict['result']
    return f"Brand: { res['brand'] }\n Model: { res['model'] }\n Color: { res['color'] }\n Year: { res['year'] }"


@client.event
async def on_ready():
    print(f'{client.user.name} has connected to Discord!')

@client.event
async def on_message(message):
    if message.content.strip() == '!predict':
        if len(message.attachments) > 0:
            for attach in message.attachments:
                url = attach.url
                image = requests.get(url).content
                try:
                    with open(url.split('/')[-1], 'wb') as f:
                        f.write(image)
                    with open(url.split('/')[-1], 'rb') as f:
                        prediction = get_prediction(f)
                    os.remove(url.split('/')[-1])
                except Exception as e:
                    print(e, file=sys.stderr)
                    await message.channel.send("There was an error with the bot")
                else:
                    output = clean_output(prediction)
                    await message.channel.send(output)
        else:
            await message.channel.send("send an attachement.")

client.run(TOKEN)
