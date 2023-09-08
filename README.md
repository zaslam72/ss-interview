# SS Coding Challenge
### Implementation by Zara Aslam

Here is a simple application that allows you to add, edit, and delete tasks on your personal TO DO list. It is built using a Typescript/ReactJS frontend and a Python/Django backend. The database is provided by SS. 

# Getting Started
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

Don't hesitate to reach out if you have any problems installing the app or getting it running :) 

<img width="978" alt="To Do List" src="https://github.com/zaslam72/ss-interview/assets/20732021/e90d2653-5281-478e-a113-53df3be1c524">
<img width="969" alt="Add a Task" src="https://github.com/zaslam72/ss-interview/assets/20732021/95ce059b-4ba3-4227-be99-96c64baed064">
<img width="976" alt="Edit a Task" src="https://github.com/zaslam72/ss-interview/assets/20732021/da554992-4833-4cd9-a1e9-d00c703ee100">
<img width="973" alt="Delete a Task" src="https://github.com/zaslam72/ss-interview/assets/20732021/0b3e37ec-2200-4a0e-96e1-28970f6af294">







