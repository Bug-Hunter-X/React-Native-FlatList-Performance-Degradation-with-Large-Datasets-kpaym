# React Native FlatList Performance Issue

This repository demonstrates a common performance problem encountered when using FlatList in React Native with large datasets. The app becomes unresponsive due to inefficient rendering.

## Problem

The provided `FlatListBug.js` file shows a FlatList rendering a large number of items.  While functional, it's inefficient and causes performance issues, especially on lower-end devices.

## Solution

The `FlatListSolution.js` file offers an improved implementation using techniques like `keyExtractor`, `ItemSeparatorComponent`, `getItemLayout`, and potentially `windowSize` to optimize rendering and scrolling performance.

## How to Run

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.
4. Run `npx react-native run-android` (or `npx react-native run-ios`) to run the app on an emulator or device.

Compare the performance of the two examples to see the improvement.