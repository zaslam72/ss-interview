from django.test import TestCase

# Having unit and integration tests are so important! Due to time constraints of the coding challenge, I did not spend time writing tests.
# In testing, I like to create a factory system for having access to quick data.
# I also like to use mocking to imitate certain API calls or return particular values to test different scenarios.


# For example, if we wanted to write a test for POST to our endpoint `/api/todos`,
# we could validate the `create_or_update_task()` method was called.
# We could validate the response contains a status code of 200 or some row data.