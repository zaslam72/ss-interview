import smartsheet

# File interacts with the Smartsheet API using the Python SDK library

# Hardcoded sheet ID
SHEET_ID = 838045616000900


#############################################
###        HELPER METHODS FOR CELLS       ###
#############################################


# Instantiates an SS Cell object and update fields
def create_cell(column_id, value):
    cell = smartsheet.models.Cell()
    cell.column_id = int(column_id)
    cell.value = value
    return cell


#############################################
###          METHODS FOR SHEETS           ###
#############################################


# Method retrieves the list of columns from SS and returns a cleaned version
def get_columns():
    smart = smartsheet.Smartsheet()  # Instantiate client
    ss_columns = smart.Sheets.get_columns(
        SHEET_ID, include_all=True
    )  # Get columns from SS
    columns = []
    # For each column, keep only the data we need for the frontend
    for column in ss_columns.data:
        cleaned = {
            "id": column.id,
            "type": column.type.value.name,
            "title": column.title,
        }
        # If the column is a PICKLIST, it will contain a list of "options" to select from
        if column.options:
            cleaned["options"] = [option for option in column.options]
        columns.append(cleaned)
    return columns


# Method retrieves the list of rows/tasks from SS and returns a cleaned version
def get_tasks():
    smart = smartsheet.Smartsheet()  # Instantiate client
    sheet = smart.Sheets.get_sheet(SHEET_ID)  # Get the sheet from SS
    rows = []
    if sheet.rows:
        # For each row, keep only the data we need for the frontend
        for row in sheet.rows:
            cells = []
            for cell in row.cells:
                cells.append({"columnId": cell.column_id, "value": cell.value})
            rows.append({"id": row.id, "cells": cells})
    return rows


# Method creates or updates a task in SS
def create_or_update_task(data, row_id=None):
    smart = smartsheet.Smartsheet()  # Instantiate client
    row = smartsheet.models.Row()  # Instantiate an SS Row Object
    for column_id, value in data.items():
        row.cells.append(create_cell(column_id, value))  # Creates a new cell
    if row_id:
        # Update the row in SS, if it exists
        row.id = int(row_id)
        smart.Sheets.update_rows(SHEET_ID, [row])
    else:
        # Otherwise create a new one in SS
        smart.Sheets.add_rows(SHEET_ID, [row])


# Method deletes a task provided the row ID
def delete_task(row_id):
    smart = smartsheet.Smartsheet()  # Instantiate client
    smart.Sheets.delete_rows(SHEET_ID, row_id)  # Delete
