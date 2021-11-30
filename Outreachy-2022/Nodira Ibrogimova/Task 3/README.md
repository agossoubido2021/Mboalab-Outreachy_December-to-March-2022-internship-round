# Research
Options for the Data collection tool to record Typhoid Fever symptoms Data:

##### *The details are listed followed by the options*

1. Google Forms
    
    Good for gathering data in excel form and reading as a dataset for training Machine Learning models.
2. [KoBoToolbox](https://github.com/kobotoolbox/)

    A free & open source suite of tools for field data collection for using in challenging environments.

3. Creating an application using *Django* framework and gather information inviting clinics & clinicians to participate.
    
    This choice is optimal in case custom design and specific preferences are required.
    As long as the objective of the project is to combine AI with irreplacable clinicians, building custom platform/tool could be the case only when certain features of KoBoToolbox are not compatible with our goals.
    In **Result** section, the platform (e.g. Desktop, mobile and web compatible application) of the tools will be discussed in more details.

#### Articles referenced for detailed Q&A in forms:
1. [What you need to know about typhoid](https://www.medicalnewstoday.com/articles/156859)

2. [About Typhoid Fever](http://www.spartanmemes.com/english/medical-blogs/typhoid-fever/)

# Result

## 1. Google Forms
Using this tool is effient in terms of 
- fast implementation
- retrieveing data in excel format for ML training
    
However, it's applicable only in an online format. Can be treated as a fast in-hand option for cases when users are guaranteed to have good internet access.

## 2. KoBoToolbox
This option is a free & open source suite of tools for field data collection for using in challenging environments: where providing data collection synced online is not the case + areas with good internet access. It brings simple, robust and powerful tools for data collection into use. 
    
There are several key features of KoBoToolbox:

1. Form builder
    - Design forms quickly and easily with an intuitive form builder
    - Reuse existing questions and blocks of questions and manage the in the question library
    - Build complex forms with skip logic and validation
    - More than 20 different question types available including location, image, video, rating, matrix, etc.
    - Easily share projects with colleagues and set granular permission levels


2. Collect data
    - Online and Offline
    - On phones, tablets or any browser        
    - Ensures data can't be read by a third party
    - Strong safeguards against data loss even on very long interviews        
    - Data immediately available right after it's collected

    
3. Analyze and manage data
    - Create summary reports with graphs and tables and fine-tune report's charts, colors and questions
    - Visualize collected data on a map: aheatmap, clustering, other base layers, etc.        
    - Disaggregate data in reports and maps: by gender, region or educational level
    - Export all data at any time
    - Supported formats: Excel, CSV, KML, ZIP (for media) and SPSS

        **This is one of important steps for us during the project - retreiving data in an applicable format for training with ML algorithm**
    
    - Access your data through robust API

    Both publicly-available instances of KoBoToolbox provide offer good amount of storage and submissions number (per month). 
    Considering all pros listed above, KoBoToolbox seems to be a promising choice for using as a data collection tool during the process. It would also help to focus more on data collection and optimizing the algorithm for more accurate predictions than focusing on software building for data collection.

## 3. Angular + DJANGO application from scratch
### Diagnose Data Collection Tool

The following **Data Collection Tool** is dedicated for receiving data from users, saving in the cloud storage and retrieving them in **.csv** format for reading (in Jupyter Notebook) to train in a selected/optimized Machine Learning algorithm.

### Architecture
1. Front-end

    Presents visualized and structured pages built with **Angular**:

    1. Dashboard
    
        This is where a user can enter the details of the patient and submit

    2. View Raw Data

        This page is dedicated to demonstrate all patients records that have been submitted
    
    3. Statistics

        Visual form of the analysis and statistics of the records
    
    4. Contact Us

        For reporting requests, questions or issues

2. Back-end

    REST API built with **DJANGO** provides:
    - Authorization
    - Saving data submitted via form in Dashboard page
    - Exporting data in `.csv` format


### How it Works

1. Authorization

If a user has signed in earlier with the credentials of the (only one currently) admin, the credentials are saved/present in local storage. Admin can directly open the app as the sign in details have been saved in cache.

Otherwise, a user navigated to a **Sign In** page to enter the credentials of the admin.


**IMPORTANT: The credentials will be received upon request**

2. Submitting the form via Dashbord page

3. In case of requests, questions or issues contacting via Contact Page

4. Checking the records in table or charts format depending on the need of the of the statistics

    NOTE: This types of visualizations can be done in a Jupyter Notebook while training datasets as well

5. Exporting data in `.csv` format from REST API to train in ML algorithm.

Please, not that this solution provided is a web application.


1. [Live Demo](https://github.com/NodiraIbrogimova/tf-diagnose-data-collection)

2. [Source Code](https://github.com/NodiraIbrogimova/Diagnose-Data-Collection-Tool)

3. [REST API](https://ftdiagnose.pythonanywhere.com/swagger/)

4. [Initial Design](https://www.figma.com/file/0MW7v9ZfVjhqQ3f20kQbL2/Typhoid-Fever--early-diagnosis-%7C-Logo?node-id=0%3A1)

    To make logo match with broader range of researchs including data collection and early-diagnosis tools with *Clinicians + AI*, the main color - green has been changed and the icon of Typhoid Fever has been replaced by the plus sign implying the relevance of the medical sphere in the project.

If we want this tool to be compatible in any format (e.g. Desktop, mobile and web compatible application), we can use the following architecture to guarantee its compatibleness:

<img width="1440" alt="compatible app" src="https://user-images.githubusercontent.com/11291840/140494165-5809e67c-2aae-4365-aedc-9eaca7c19ae3.png">


We can wrap our Angular (or any front-end application built with articular framewrok/library) in an Electron to make it downloadable in various devices. 

Electron is a free and open-source software framework developed and maintained by GitHub. It allows for the development of desktop GUI applications using web technologies: it combines the Chromium rendering engine and the Node.js runtime.
In addition, we can use Firbase and Google's Cloud Storage for REST API + storage.