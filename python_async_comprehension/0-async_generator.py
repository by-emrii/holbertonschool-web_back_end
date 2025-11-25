#!/usr/bin/env python3
"""This is for python module '0-async_generator.py' """
import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    coroutine loop 10 times, each wait 1 second asynchronously,
    then yield a random number between 0 and 10
    """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(1, 10)
