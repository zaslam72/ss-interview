from django.http import JsonResponse
from rest_framework import viewsets
import json

from .smartsheet import get_tasks, create_or_update_task, delete_task


class TodoViewSet(viewsets.ViewSet):
    def list(self, request):
        """ 
            This method is called when a GET request comes in to `api/todos/`.
            It retrieves a list of tasks from our sheet.
            If successful, it returns a JSON response with the following data:
                status: int
                rows: List[{ id: str | int, status: str, text: str }]
        """
        rows = get_tasks()
        return JsonResponse({"status": 200, "rows": rows})

    def create(self, request):
        """ 
            This method is called when a POST request comes in to `api/todos/`.
            It creates a new task for our sheet.
            The request should contain JSON body with the following data:
                status: str
                text: str
            If successful, it returns a JSON response with the following data:
                status: int
                rows: List[{ id: str | int, status: str, text: str }]
        """
        body = json.loads(request.body)
        status = body["status"]
        text = body["text"]
        create_or_update_task(status, text)
        rows = get_tasks()
        return JsonResponse({"status": 200, "rows": rows})

    def update(self, request, pk=None):
        """ 
            This method is called when a PUT request comes in to `api/todos/:id`.
            It updates the given task.
            The URL should contain the ID of the task that needs updating.
            The request should contain JSON body with the following data:
                status: str
                text: str
            If successful, it returns a JSON response with the following data:
                status: int
                rows: List[{ id: str | int, status: str, text: str }]
        """
        body = json.loads(request.body)
        status = body["status"]
        text = body["text"]
        create_or_update_task(status, text, pk)
        rows = get_tasks()
        return JsonResponse({"status": 200, "rows": rows})

    def destroy(self, request, pk=None):
        """ 
            This method is called when a DELETE request comes in to `api/todos/:id`.
            It deletes the given task.
            The URL should contain the ID of the task that needs to be deleted.
            If successful, it returns a JSON response with the following data:
                status: int
                rows: List[{ id: str | int, status: str, text: str }]
        """
        delete_task(pk)
        rows = get_tasks()
        return JsonResponse({"status": 200, "rows": rows})
