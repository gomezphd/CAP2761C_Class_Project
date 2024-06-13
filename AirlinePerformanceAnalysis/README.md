# Airline On-Time Arrival Performance Analysis for Domestic Flights in March 2024

## Project Overview
This project analyzes the on-time arrival performance of domestic flights in March 2024, providing insights into flight delays, performance metrics, and various factors affecting punctuality.  

The project is an assignment for CAP2716C Intermediate Analytics (SQL) at Miami Dade College.  Project was completed with Matthew Mullen as co-author.

## Table of Contents
1. [Dataset](#dataset)
2. [Setting Up the Environment](#setting-up-the-environment)
    - [Step 1: Create Database in SQL Server Management Studio (SMSS)](#step-1-create-database-in-sql-server-management-studio-smss)
    - [Step 2: Connect to the Database](#step-2-connect-to-the-database)
    - [Step 3: Create the AirlineAssociations Table](#step-3-create-the-airlineassociations-table)
    - [Step 4: Create the AirlineMetrics Table](#step-4-create-the-airlinemetrics-table)
3. [Analysis and Visualizations](#analysis-and-visualizations)
    - [A. National Airline Performance Overview](#a-national-airline-performance-overview)
    - [B. Miami Metropolitan Area Airports (MIA, FLL, PBI)](#b-miami-metropolitan-area-airports-mia-fll-pbi)
    - [C. Miami International Airport (MIA)](#c-miami-international-airport-mia)

## Dataset
The data used in this analysis is sourced from the Bureau of Transportation Statistics (BTS). The BTS tracks the on-time performance of domestic flights operated by large air carriers. Summary information on the number of on-time, delayed, canceled, and diverted flights appears in the monthly Air Travel Consumer Report, published about 30 days after the month's end. For more details, please visit the Bureau of Transportation Statistics website.

## Setting Up the Environment
### Step 1: Create Database in SQL Server Management Studio (SMSS)
Follow these sub-steps to create and set up your database:
1. Create a database named `FlightDelays` (case sensitive) in SSMS.
2. Load the flat file `FlightsTable.csv` found in the same folder as this notebook.
3. Name the table `Flights` (case sensitive).
4. Ensure the table structure and character types are as shown below:

|--------------------------------------------------------------------------------------------|
| COLUMN_NAME                       | DATA_TYPE     | CHARACTER_MAXIMUM_LENGTH | IS_NULLABLE |
|-----------------------------------|---------------|--------------------------|-------------|
| AirlineCode                       | nvarchar      | 3                        | NO          |
| AirlineName                       | nvarchar      | 58                       | NO          |
| AirportCode                       | nvarchar      | 4                        | NO          |
| AirportName                       | nvarchar      | 100                      | NO          |
| Count_Arrivals                    | float         | NULL                     | NO          |
| Count_ArrFlights_Delayed15PlusMin | float         | NULL                     | NO          |
| Count_Airline_Delay               | float         | NULL                     | NO          |
| Count_Weather_Delay               | float         | NULL                     | NO          |
| Count_NAS_Delay                   | float         | NULL                     | NO          |
| Count_Security_Delay              | float         | NULL                     | NO          |
| Count_LateAircraft_Delay          | float         | NULL                     | NO          |
| Count_Arrivals_Cancelled          | float         | NULL                     | NO          |
| Count_Arrivals_Diverted           | float         | NULL                     | NO          |
| TotalMinutes_Arrivals_Delay       | int           | NULL                     | NO          |
| TotalMinutes_Airline_Delay        | int           | NULL                     | NO          |
| TotalMinutes_Weather_Delay        | int           | NULL                     | NO          |
| TotalMinutes_NAS_Delay            | int           | NULL                     | NO          |
| TotalMinutes_Security_Delay       | int           | NULL                     | NO          |
| TotalMinutes_LateAircraft_Delay   | int           | NULL                     | NO          |

### Step 2: Connect to the Database
Use the following SQL statement to set the context for the `FlightsDelay` database and connect it to the one you created in SSMS:
```sql
USE FlightDelays;

### Step 3: Create the AirlineAssociations Table
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

### Step 3: Create the AirlineMetrics Table
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







