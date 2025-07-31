# BankOrganizerWithUs

## Overview

BankOrganizerWithUs is an advanced bank organization script that automatically sorts your bank items into category-based tabs using dynamic classification. The script creates up to 14 additional tabs based on item categories and organizes items intelligently within each tab.

## Features

- **Dynamic Category Classification**: Automatically classifies items into 14 different categories
- **Automatic Tab Creation**: Creates tabs from category items (no 'Other' category - all items classified)
- **Intelligent Item Sorting**: Organizes items into appropriate category tabs
- **Fine-tuning**: Sorts items within categories (potions by dose, runes by type, etc.)
- **Configurable Operations**: Skip specific steps if tabs are already configured
- **Single Category Mode**: Sort items within a specific category only (standalone mode)
- **Configurable Delays**: Adjust timing for all operations
- **Local/Remote Data**: Loads item categories from local file or downloads from GitHub

## Requirements

- **Location**: Start near a bank
- **Bank Access**: Must be able to open and access your bank
- **Internet Connection**: Required for initial download of item categories (if not present locally)

## Setup

### First Time Setup

1. **Start near a bank** - The script will automatically open the bank
2. **Run the script** - It will automatically download the item categories file on first run
3. **Configure settings** - Use the GUI to adjust delays and skip options as needed

### Item Categories File

The script uses a JSON file located at: `C:\Users\{username}\BotWithUs\scripts\item_categories.json`

- **Automatic Download**: If the file doesn't exist, it's automatically downloaded from GitHub
- **Manual Editing**: You can manually edit this file to customize categories and item classifications
- **Categories Read Bottom-Up**: Categories are processed from bottom to top in the file
- **Reload Function**: Use the "Reload Item Categories" button in the GUI after editing the file

## Usage

### Basic Usage

1. **Start the script** near a bank
2. **Wait for bank to open** - The script will automatically open the bank
3. **Let it run** - The script will perform the complete sorting process

### Advanced Usage

#### Skip Actions
Use the GUI to skip specific operations if your bank is already partially organized:

- **Skip Tab Deletion**: Keep existing tabs
- **Skip Tab Creation**: Use existing tabs only
- **Skip Item Sorting**: Items already in correct tabs
- **Skip Fine Tuning**: Items already in correct order

#### Single Category Mode
Sort items within a specific category only:

1. Enable "Single Category Mode" in the GUI
2. Select the desired category from the dropdown
3. Click "Sort Selected Category"
4. Start the script

## Configuration

### Delay Settings

Configure timing for different operations:

- **Item Sorting Delays**: 500-800ms (default)
- **Fine Tuning Delays**: 600-800ms (default)

### Skip Options

- **Skip Tab Deletion**: Useful if you want to keep your current tab structure
- **Skip Tab Creation**: Use if you already have all the tabs you need
- **Skip Item Sorting**: Use if items are already in the right tabs - can't be used if no tabs and skipping tab creation
- **Skip Fine Tuning**: Use if items are already in the right order

## How It Works

### Step 1: Tab Deletion (Optional)
- Deletes existing tabs to start fresh
- Can be skipped if you want to keep current tabs

### Step 2: Tab Creation
- Finds one item per category from your bank
- Creates new tabs by dragging category items to the "+" tab area
- Creates up to 14 additional tabs (maximum allowed by the game)

### Step 3: Item Sorting
- Sorts all bank items into their respective category tabs
- Skips items used for tab creation to avoid breaking tabs

### Step 4: Fine-tuning
- Sorts items within each category tab
- Uses dynamic pattern detection to group similar items
- Sorts by stack size, numerical values, and alphabetical order

## Item Categories

The script uses dynamic category classification with 14 categories:

- All items are classified into specific categories
- No "Other" category - every item has a defined category
- Categories are read from bottom to top in the JSON file
- You can customize categories by editing the JSON file

## File Structure

### JSON File Format

```json
{
  "categories": [
    "Category1",
    "Category2",
    "Category3"
  ],
  "items": [
    {
      "id": 12345,
      "name": "Item Name",
      "category": "Category1"
    }
  ]
}
```

### File Location
- **Local**: `C:\Users\{username}\BotWithUs\scripts\item_categories.json`
- **Remote**: `https://raw.githubusercontent.com/BotWithUs/StaticResources/master/item_categories.json`

## Troubleshooting

### Common Issues

1. **Script won't start**
   - Ensure you're near a bank
   - Check that you're logged into the game

2. **Categories not loading**
   - Check internet connection for initial download
   - Verify the JSON file exists and is readable
   - Use "Reload Item Categories" button in GUI

3. **Tabs not creating**
   - Ensure you have items from different categories
   - Check that you haven't reached the 14-tab limit
   - Verify bank interface is responding properly

4. **Items not sorting correctly**
   - Check that items are properly categorized in the JSON file
   - Use "Reload Item Categories" after editing the file
   - Verify the JSON syntax is correct

### Error Messages

- **"Item categories data is not ready"**: Use "Reload Item Categories" button
- **"Failed to download item categories file"**: Check internet connection
- **"Cannot read item categories file"**: Verify file permissions and location

## Tips

1. **Test with a small bank** to understand the sorting behavior
2. **Customize categories** by editing the JSON file to match your preferences
3. **Use skip options** if you only want to perform specific operations
4. **Monitor the console** for detailed information about the sorting process

## Support

For issues or questions:
- Check the console output for detailed error messages
- Verify your JSON file syntax if manually editing
- Ensure you have the latest version of the item categories file

## Version History

- **v1.0**: Initial release with dynamic category classification and tab management 