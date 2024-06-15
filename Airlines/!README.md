# Airline On-Time Arrival Performance Analysis for Domestic Flights in March 2024

## Introduction
The main purpose of this project was to enable students to create various visualizations using Azure as a tool for developing quick visualizations from SQL for analysis and planning future visualizations with platforms such as Python, Power BI, or Tableau. Students were restricted to using only SSMS (SQL Server Management Studio) and Azure Data Studio with local instances as a way of learning these platforms. The project also aimed to help students gain proficiency in setting up a GitHub project repository with folders, subfolders, and various forms of data (ipynb, bak, sql, csv, xlsx, md) for the same project and personalizing a page.

The project involved intermediate-level SQL queries for creating visualizations to analyze the on-time performance of domestic flights in the United States during March 2024.

- A static "view only notebook found in this folder: [View_Only_AIrline_Project_Notebook.ipynb].
- A fully operational notebook can be found in the notebooks folder: [CAP2761C_Project2_Airlines2024-March.ipynb].

## Contents
- [1. Repository Structure](1_Repository_Structure.md)
- [2. Introduction](2_Introduction.md)
- [3. Learning Objectives](3_Learning_Objectives.md)
- [4. Course Competencies](4_Course_Competencies.md)
- [5. Project Requirements](5_Project_Requirements.md)
- [6. Dataset and Preprocessing](6_Dataset_and_Preprocessing.md)
- [7. Analysis and Results](7_Analysis_and_Results.md)
- [8. Conclusion](8_Conclusion.md)
- [Contact](Contact.md)

## Repository Structure
- `1_Repository_Structure.md`: Explains the structure of the repository.
- `2_Introduction.md`: Provides an introduction to the project.
- `3_Learning_Objectives.md`: Details the learning objectives of the project.
- `4_Course_Competencies.md`: Lists the course competencies.
- `5_Project_Requirements.md`: Outlines the project requirements.
- `6_Dataset_and_Preprocessing.md`: Describes the dataset and preprocessing steps.
- `7_Analysis_and_Results.md`: Contains the analysis and results of the project.
- `8_Conclusion.md`: Provides the conclusion of the project.
- `data/`: Contains raw, clean, and final data files.
  - `raw_data/`: contains the raw data in csv format and a description of the original colums in that dataset
  - `clean_data/`: clean data in bak, csv, and xlsx format (t-sql dump with clean data located under sripts subfolder).
  - `final_data/` final data in bak, csv, and xlsx format (t-sql dump with clean data located under scripts subfolder).
- `notebooks/`: Contains the Jupyter notebooks used for the project.
  - `CAP2761C_Preprocessing_DataCleaning_EDApynb.ipynb`: Notebook detailing the preprocessing, data cleaning, and exploratory data analysis steps.
  - `View_Only_Airline_Project_Notebook.ipynb`: Preview only static notebook for viewing.
  - `CAP2761C_Project2_Airlines2024-March.ipynb`: Active project file that can be cloned and modified by the user.
- `scripts/`: Contains SQL scripts related to the project.
  - `smss_clean_data/`: Contains SQL scripts related to the clean data.
  - `smss_final_data/`: Contains SQL scripts related to the final processed data.

This structure ensures that all data, scripts, and documentation are organized systematically for easy access and understanding.
