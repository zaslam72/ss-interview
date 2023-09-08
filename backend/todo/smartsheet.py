import smartsheet

# File that contains our calls to the Smartsheet API
# Hardcoded sheet ID and column IDs for simplicity of the app

SHEET_ID = 838045616000900
STATUS_COLUMN_ID = 5699285907623812
TEXT_COLUMN_ID = 4573386000781188


#############################################
###        HELPER METHODS FOR CELLS       ###
#############################################


def create_status_cell(value):
    cell = smartsheet.models.Cell()
    cell.column_id = STATUS_COLUMN_ID
    cell.value = value
    return cell


def create_text_cell(value):
    cell = smartsheet.models.Cell()
    cell.column_id = TEXT_COLUMN_ID
    cell.value = value
    return cell


#############################################
###          METHODS FOR TASKS           ###
#############################################


def get_tasks():
    smart = smartsheet.Smartsheet()
    sheet = smart.Sheets.get_sheet(SHEET_ID)
    # Going to iterate through the rows to format data
    # The way the frontend is expecting it (simplified version)
    # Due to time constraints, I hardcoded the columns
    rows = []
    if sheet.rows:
        for r in sheet.rows:
            row = {}
            row["id"] = r.id
            for c in r.cells:
                if c.column_id == STATUS_COLUMN_ID:
                    row["status"] = c.value
                if c.column_id == TEXT_COLUMN_ID:
                    row["text"] = c.value
            rows.append(row)
    return rows


def create_or_update_task(status, text, row_id=None):
    smart = smartsheet.Smartsheet()
    row = smartsheet.models.Row()
    row.cells.append(create_status_cell(status))
    row.cells.append(create_text_cell(text))
    if row_id:
        row.id = int(row_id)
        smart.Sheets.update_rows(SHEET_ID, [row])
    else:
        smart.Sheets.add_rows(SHEET_ID, [row])


def delete_task(row_id):
    smart = smartsheet.Smartsheet()
    delete = smart.Sheets.delete_rows(SHEET_ID, row_id)
    print("DELETE", delete)
