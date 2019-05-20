import pandas as pd
import json

def save_to_json(csv, name, *columns):
  my_json = {}
  for column in columns:
    my_json[column] = []

  for index, row in csv.iterrows():
    for index, column in enumerate(columns):
      row_to_append = row[column]
      if (index == 0):
        row_to_append = int(row[column])
      else:
        try:
          row_to_append = float(row[column])
        except:
          row_to_append = float(row[column].replace(',', ''))
      # print(type(row_to_append))
      my_json[column].append(row_to_append)

  with open('json/' + name + '.json', 'w') as f:
    json.dump(my_json, f)

if __name__ == '__main__':
  name = 'งบทั้งหมดของจังหวัด'
  csv = pd.read_csv('1.csv')
  save_to_json(csv, name, 'Year', 'งบทั้งหมดของจังหวัด')

  name = 'กระทรวงศึกษาธิการ'
  csv = pd.read_csv('2.csv')
  save_to_json(csv, name, 'Year', 'กระทรวงศึกษาธิการ')


