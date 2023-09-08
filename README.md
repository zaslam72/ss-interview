# SS Coding Challenge
Implementation by Zara Aslam

A simple application that allows you to add, edit, and delete tasks on your personal TO DO list. It is built using a Typescript/ReactJS frontend and a Python/Django backend. The database is provided by SS. 

## Getting Started
Clone the repository and install NodeJS & Django if you don't have it already

**For Backend:** In a new terminal window:
- Activate a virtual env `pipenv shell`
- Run `pipenv install --dev`
- Run `pip install smartsheet-python-sdk` (I need to add this to the Pipfile still; mandatory step until I'm able to!)
- Go into the `backend` app `cd backend`
- Run migrations (this is really not needed but it will quiet your server logs) `python manage.py migrate`
- Start the server `python manage.py runserver`

**For Frontend:** In a new terminal window:
- Go into the `frontend` app `cd frontend`
- Install dependencies `npm install`
- Start the server `npm start`

**Manual Steps:**
- You'll need access to the SS API. Obtain an access token and add it to the `settings.py` file on line 136 `SMARTSHEET_ACCESS_TOKEN`
- You'll need to update the constants at the top of `smartsheet.py` to your own `SHEET_ID` and `COLUMN_ID`

## Important Files
Files that I personally updated/added for the implementation. The rest were provided through `django-admin startproject`, `django-admin startapp`, and `create-react-app`.

**BACKEND**
- `backend/backend/settings.py`
- `backend/backend/urls.py`
- `backend/todo/smartsheet.py`
- `backend/todo/smartsheet.py`
- `backend/todo/views.py`

**FRONTEND**
- `frontend/src/components` (all of them)
- `frontend/App.tsx`
- `frontend/types.ts`
- `frontend/index.ts` and `frontend/App.css` have minor changes

Don't hesitate to reach out if you have any problems installing the app or getting it running :) 



<img width="978" alt="To Do List" src="https://github.com/zaslam72/ss-interview/assets/20732021/ad0f12ac-4904-40bb-ac08-dd564e685aaf">
<img width="969" alt="Add a Task" src="https://github.com/zaslam72/ss-interview/assets/20732021/ecd57692-79e6-4b52-88ab-0f42c1dfb0c9">
<img width="976" alt="Edit a Task" src="https://github.com/zaslam72/ss-interview/assets/20732021/016ebc2b-0e8b-470d-918b-cbe184dc1f8b">
<img width="973" alt="Delete a Task" src="https://github.com/zaslam72/ss-interview/assets/20732021/f2597641-6240-49c7-8cf5-d9da339f41b2">



