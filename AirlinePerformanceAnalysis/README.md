# Airline On-Time Arrival Performance Analysis for Domestic Flights in March 2024

## Project Overview
This project analyzes the on-time arrival performance of domestic flights in March 2024, providing insights into flight delays, performance metrics, and various factors affecting punctuality.

The project is an assignment for CAP2716C Intermediate Analytics (SQL) at Miami Dade College. Project was completed with Matthew Mullen as co-author.

## Table of Contents
1. [Dataset](#dataset)
2. [Setting Up the Environment](#setting-up-the-environment)
   - [Step 1: Create Database in SQL Server Management Studio (SMSS)](#step-1-create-database-in-sql-server-management-studio-smss)
   - [Step 2: Connect to the Database](#step-2-connect-to-the-database)
   - [Step 3: Run the SQL Script](#step-3-run-the-sql-script)
   - [Step 4: Verify the Setup](#step-4-verify-the-setup)
   - [Step 5: Create the AirlineAssociations Table](#step-5-create-the-airlineassociations-table)
   - [Step 6: Create the AirlineMetrics Table](#step-6-create-the-airlinemetrics-table)
3. [Data Analysis and Visualization](#data-analysis-and-visualization)
4. [Results](#results)
5. [Conclusion](#conclusion)

## Dataset

- Source of the Data: The data used in this analysis is sourced from the Bureau of Transportation Statistics (BTS). The BTS tracks the on-time performance of domestic flights operated by large air carriers. Summary information on the number of on-time, delayed, canceled, and diverted flights appears in the monthly Air Travel Consumer Report, published about 30 days after the month’s end. For more details, please visit the Bureau of Transportation Statistics website.

- Preprocessing steps
1. Imported the data as a SMSS Flat file.
2. Created the `Flights` Table (see below) using SMSS (allowed nulls as data had rows with all nulls). 

|--------------------------------------------------------------------------------------------|
| COLUMN_NAME                       | DATA_TYPE     | CHARACTER_MAXIMUM_LENGTH | IS_NULLABLE |
|-----------------------------------|---------------|--------------------------|-------------|
| AirlineCode                       | nvarchar      | 3                        | NO          |
| AirlineName                       | nvarchar      | 58                       | NO          |
| AirportCode                       | nvarchar      | 4                        | NO          |
| AirportName                       | nvarchar      | 100                      | NO          |
| Count_Arrivals                    | float         | NULL                     | YES         |
| Count_ArrFlights_Delayed15PlusMin | float         | NULL                     | YES         |
| Count_Airline_Delay               | float         | NULL                     | YES         |
| Count_Weather_Delay               | float         | NULL                     | YES         |
| Count_NAS_Delay                   | float         | NULL                     | YES         |
| Count_Security_Delay              | float         | NULL                     | YES         |
| Count_LateAircraft_Delay          | float         | NULL                     | YES         |
| Count_Arrivals_Cancelled          | float         | NULL                     | YES         |
| Count_Arrivals_Diverted           | float         | NULL                     | YES         |
| TotalMinutes_Arrivals_Delay       | int           | NULL                     | YES         |
| TotalMinutes_Airline_Delay        | int           | NULL                     | YES         |
| TotalMinutes_Weather_Delay        | int           | NULL                     | YES         |
| TotalMinutes_NAS_Delay            | int           | NULL                     | YES         |
| TotalMinutes_Security_Delay       | int           | NULL                     | YES         |
| TotalMinutes_LateAircraft_Delay   | int           | NULL                     | YES         |

3. Checked the Data Types
4. Insert of Data from CSV File
5. Set all table columbs to `IS NOT NULL`
6. Inspected for Duplicates (no duplicates found)
7. Inspected for Nulls (three rows were found with nulls for all metrics)
8. Calculated impact upon dataset to remove these and it was less than 1% of the data. 
9. Calculated the impact upon airports or airlines and discovered one airport only had two entries (the one with all nulls and an additional entry)
8. Dropped the rows with all missing metrics and the airport with only one entry. 
9. Saved the File as FlightDelays (keeping with the original naming convention)


## Setting Up the Environment

### IMPORTANT: Prerequisites (Prior to Utilizing the `AirlinePerformanceMarch2024` Notebook)

**Ensure you have the following installed**:

- **SQL Server Management Studio (SMSS)**  
  Available at: [Download SQL Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15)

- **SQLCMD Utility**  
  Available at: [Download SQLCMD Utility](https://docs.microsoft.com/en-us/sql/tools/sqlcmd-utility?view=sql-server-ver15)

- **Azure Data Studio**  
  Available at: [Download Azure Data Studio](https://docs.microsoft.com/en-us/sql/azure-data-studio/download-azure-data-studio)  
  or alternatively, a Jupyter notebook with T-SQL Kernel



### Step 2.1: Prerequisite Steps
- Read this `README.md` file for detailed instructions.
- Ensure that you have the required software installed. Links to download the necessary packages are provided above.
- Clone the repository:
  ```sh
  git clone https://github.com/your-username/AirlinePerformanceAnalysis.git
  cd AirlinePerformanceAnalysis


### Step 2.2: Connect to the Database
Make sure you have SQL Server installed locally and the SQL Server Command Line Tools (`sqlcmd`) available.
You can download and install `sqlcmd` from [here](https://docs.microsoft.com/en-us/sql/tools/sqlcmd-utility?view=sql-server-ver15).

Use the following SQL statement to set the context for the `FlightDelays` database and connect it to the one you created in SMSS:
```sql
USE FlightDelays;

### Step 2.3: Create the AirlineAssociations Table
Use the following SQL statement to create the `AirlineAssociations` table with the necessary columns to store airline code, name, operating brand, and marketing airline:
```sql
CREATE TABLE FlightDelays.dbo.AirlineAssociations
(
    AirlineCode NVARCHAR(10),
    AirlineName NVARCHAR(100) NOT NULL,
    OperatingBrand NVARCHAR(100) NOT NULL,
    MarketingAirline NVARCHAR(100) NOT NULL
);
```

### Step 2.4: Create the AirlineMetrics Table
Use the following SQL statement to create the `AirlineMetrics` table and then populate it: 

```sql
CREATE TABLE FlightDelays.dbo.AirlineMetrics
(
    MarketingAirline NVARCHAR(50),
    TotalFlights INT,
    DelayedFlights INT,
    DelayPercentage DECIMAL(5,2),
    OnTimePercentage DECIMAL(5,2)
);
```
### Step 2.5: Verify the Setup

Follow these steps to verify that the setup is correct:

Open SQL Server Management Studio (SMSS) and connect to your local SQL Server instance.
Navigate to the FlightDelays database.
Verify that the Flights, AirlineAssociations, and AirlineMetrics tables have been created and populated with data.

```sql
SELECT TOP 10 * FROM FlightDelays.dbo.Flights; 
SELECT TOP 10 * FROM FlightDelays.dbo.AirlineAssociations; 
SELECT TOP 10 * FROM FlightDelays.dbo.AirlineMetrics; 
```

## Analysis and Visualizations
The following visualizations provide an in-depth analysis of airline on-time arrival performance for domestic flights in March 2024. The analysis is divided into three main sections:

### A. National Airline Performance Overview
This section provides visualizations for a broad overview of the domestic carriers in the United States and their "On-Time Arrival" statistics. The first visualization is a table showing the relationships between US domestic carriers that report to the Bureau of Transportation Statistics (BTS). This table illustrates the individual carriers, their co-branding relationships (such as regional carriers branded as American Eagle, Delta Connection, or United Express), and their associations with major airline groups. The second visualization is a pie chart depicting the percentage of on-time arrivals versus delayed flights (arrivals 15+ minutes after the scheduled time). The third visualization is a donut chart detailing the various reasons for delayed arrivals nationwide.

- **Proportions of On-Time and Late Arrivals (All US Airports, March 2024)**
- **Proportions For Main Causes of Domestic Flight Delayed Arrivals (All US Airports, March 2024)**
- **Relationships between US Domestic AirCarriers and Airline Groups (March 2024)**
- **On-Time Arrival Percentages by Airline Group (All US Airports, March 2024)**

### B. Miami Metropolitan Area Airports (MIA, FLL, PBI)
This section focuses on the on-time performance of airlines operating in the Miami Metropolitan Area, comparing performance across major airports:
- Fort Lauderdale-Hollywood International Airport (FLL)
- Miami International Airport (MIA)
- Palm Beach International Airport (PBI)

- **Total Flights, OnTime Flights, and Late Arrival Flights by Miami Metropolitan Airports (MIA, FLL, PBI) (March 2024)**
- **On-Time Arrival Percentages by Airline Group (Miami Metropolitan Airports (MIA, FLL, PBI), March 2024)**

### C. Miami International Airport (MIA)
This section focuses on the on-time performance of airlines operating specifically at Miami International Airport.

- **Arriving Flights into Miami International Airport By Individual Air Carrier (Total & Average Per Day, March 2024)**
- **Volume Proportions of Arriving Flights into MIA By Airline Group (Total, Average Per Day, Proportion of Total Flights, March 2024)**
- **On-Time Arrival Percentages by Airline (MIA - Miami International Airport, March 2024)**
- **On-Time Arrival Percentages by Air Carrier (MIA - Miami International Airport, March 2024)**







