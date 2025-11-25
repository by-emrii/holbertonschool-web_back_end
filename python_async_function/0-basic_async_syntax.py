#!/usr/bin/env python3
"""This is for python module '0-basic_async_syntax.py' """
import asyncio
import random


async def wait_random(max_delay=10):
    """
    Async func that takes an int and waits for random delay
    and returns it
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
