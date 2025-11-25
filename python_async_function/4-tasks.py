#!/usr/bin/env python3
"""This is for python module '4-tasks.py' """
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Returns a list of all the delays in float, according
    to ascending order
    """
    delay_list = []
    task_list = []

    for i in range(0, n):
        task = task_wait_random(max_delay)
        task_list.append(task)

    for task in asyncio.as_completed(task_list):
        result = await task
        delay_list.append(result)

    return delay_list
