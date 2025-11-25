#!/usr/bin/env python3
"""This is for python module '1-concurrent_coroutines.py' """
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Returns a list of all the delays in float, according
    to ascending order
    """
    delay_list = []
    task_list = []

    for i in range(0, n):
        task = asyncio.create_task(wait_random(max_delay))
        task_list.append(task)

    for task in asyncio.as_completed(task_list):
        result = await task
        delay_list.append(result)

    return delay_list
