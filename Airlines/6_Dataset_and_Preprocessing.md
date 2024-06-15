# Dataset and Preprocessing

## Data Source
The data originates from the Bureau of Transportation Statistics (BTS), a reliable source for transportation-related data. 

### Data Files
**Raw Data:**
- `Airline_Delay_Cause.csv`: Raw file downloaded from the BTS website.
- `Download_Column_Definitions.xlsx`: BTS table providing column definitions.

**Clean Data:**
- `FlightDelaysMarch2024_Clean.csv`: Clean data in CSV format.
- `FlightDelaysMarch2024_Clean.xlsx`: Clean data in Excel format.
- `smss_clean_data/smss_DataDump_FlightDelays_March2024_CleanData.sql`: SQL script for the clean data.

**Final Data Files:**
- `FlightsTable.csv`: Final table with all flight details.
- `AirlineAssociationsTable.csv`: Final table with airline associations.
- `AirlineMetricsTable.csv`: Final table with airline metrics.
- `FinalTables.xlsx`: Combined data in Excel format.

## Preprocessing Steps
1. **Data Import**: Imported the data as a flat file into SSMS.
2. **Table Creation**: Created the `Flights` table, allowing nulls initially.
3. **Data Insertion**: Inserted data from the CSV file.
4. **Data Cleaning**:
   - Set all table columns to `IS NOT NULL`.
   - Inspected for duplicates and nulls.
   - Dropped rows with all missing metrics.
5. **Final Table Creation**: Saved the cleaned data as `FlightDelays`.
