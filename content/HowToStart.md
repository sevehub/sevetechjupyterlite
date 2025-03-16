# How to Start with JupyterLite: Using the Python Kernel with Pyodide

Welcome to JupyterLite! This tutorial will help you get started with the Python kernel powered by Pyodide. Pyodide is a Python interpreter that runs in the browser, allowing you to execute Python code without any installation.

## What is JupyterLite?

JupyterLite is a Jupyter notebook environment that runs entirely in the browser. It allows you to create and share documents that contain live code, equations, visualizations, and narrative text.

## Getting Started

1. **Open JupyterLite**: 
   - Access the JupyterLite instance running on our website by [clicking this link](https://tessarinseve.pyhonanywhere.com/nws/JupyterLite.wiki.html). This will take you to the interactive environment.

2. **Create a New Notebook**:
   - Once you are in JupyterLite, click on the "New" button and select "Python Pyodide" from the dropdown menu. This will create a new notebook with the Python kernel.

3. **Understanding the Interface**:
   - The interface consists of cells where you can write code, text, or markdown. You can execute code cells and see the output directly below them.

## Using the Python Kernel with Pyodide

## Writing Your First Python Code

**Code Cell**:
   - Click on the first cell and type the following Python code:

   ```python
   print("Hello, JupyterLite!")
   ```

    Run the Cell:
    To execute the code, press Shift + Enter. You should see the output below the cell:
    Hello, JupyterLite!


## Importing Libraries

Pyodide comes with several popular Python libraries pre-installed. You can import them just like you would in a regular Python environment.

**Example: Importing NumPy:**
    In a new cell, type the following code to import NumPy and create an array:
    ```
    import numpy as np

    # Create a NumPy array
    array = np.array([1, 2, 3, 4, 5])
    print(array)
    ```
    Execute the cell to see the output:
    [1 2 3 4 5]


## Using Matplotlib in JupyterLite

JupyterLite comes with several popular Python libraries pre-installed, including Matplotlib. You can easily use these libraries in your notebooks.

**Using Matplotlib**:
   - In a new cell, you can create a simple plot using Matplotlib. Type the following code:

   ```python
   import matplotlib.pyplot as plt

   # Create a simple plot
   plt.plot([1, 2, 3], [4, 5, 6])
   plt.title("Simple Plot")
   plt.show()
   ```
    Run the Cell:
    Execute the cell by pressing Shift + Enter. You should see a simple line plot displayed below the cell.

## Saving Your Work
Download Notebook: You can save your notebook by downloading it. Click on "File" in the menu, then select "Download" to save your notebook as a .ipynb file.
