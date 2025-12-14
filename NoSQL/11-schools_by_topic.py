#!/usr/bin/env python3
"""
This is the "11-schools_by_topic.py" module
"""


def schools_by_topic(mongo_collection, topic):
    """
    returns the list of school having a specific topic
    """
    if mongo_collection is None or not topic:
        return []
    return list(mongo_collection.find({"topics": topic}))
