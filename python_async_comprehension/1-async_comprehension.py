#!/usr/bin/env python3
"""This is for python module '1-async_comprehension.py' """
import asyncio
from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    return 10 random numbers
    """
    result = [num async for num in async_generator()]
    return result