# Research

For more detailed research, the data can be collected both from patients and clinicians.
It mostly depends on the short-term and long-term objectives of the project.
Adding certain questions that patients/clinicians might fill in the forms.

### For patients:
**What to expect from your doctor?**

The doctor is likely to ask a patient a number of questions. Being ready to answer them may reserve time to go over any points planned to talk about in-depth. Estimated questions:

1. What are your symptoms and when did they begin?
2. Have your symptoms gotten better or worse?
3. Did your symptoms briefly get better and then come back?
4. Have you recently traveled abroad? Where?
5. Did you update your vaccinations before traveling?
6. Are you being treated for any other medical conditions?
7. Are you currently taking any medications?


### For doctors:
**Information to gather in advance for patients**

1. What are the possible causes for my symptoms?
2. What kinds of tests do I need?
3. Are treatments available to help me recover?
4. I have other health problems. How can I best manage these conditions together?
5. How long do you expect a full recovery will take?
6. When can I return to work or school?
7. Am I at risk of any long-term complications from typhoid fever?

# Result
The data view and its format can be viewed at **REST API** I provided in **Data Collection Tool section**.
Please note that these fields are for the test version and can be updated accordingly to the later plan.

The record of each patient (in this test version) is as follows:

```
DiagnoseCreate {
    sao2_std: integer
    title: Sao2 std
    x-nullable: true

    heart_rate_mean: integer
    title: Heart rate mean
    x-nullable: true

    respiratory_rate_mean: integer
    title: Respiratory rate mean
    x-nullable: true

    respiratory_rate_std: integer
    title: Respiratory rate std
    x-nullable: true

    heart_rate_alarm_low_max: integer
    title: Heart rate alarm low max
    x-nullable: true

    sao2_mean: integer
    title: Sao2 mean
    x-nullable: true

    temperature_mean: integer
    title: Temperature mean
    x-nullable: true

    temperature_std*: integer
    title: Temperature std

    skin_temperature_std*: integer
    title: Skin temperature std

    skin_temperature_mean: integer
    title: Skin temperature mean
    x-nullable: true

    blood_pressure_std: integer
    title: Blood pressure std
    x-nullable: true

    blood_pressure_mean: integer
    title: Blood pressure mean
    x-nullable: true

    blood_pressure_systolic_std: integer
    title: Blood pressure systolic std
    x-nullable: true

    blood_pressure_systolic_mean: integer
    title: Blood pressure systolic mean
    x-nullable: true

    blood_pressure_diastolic_std: integer
    title: Blood pressure diastolic std
    x-nullable: true

    blood_pressure_diastolic_mean: integer
    title: Blood pressure diastolic mean
    x-nullable: true

    d10w_amount*: integer
    title: D10w amount

    prescription_count*: integer
    title: Prescription count

    date_event_count*: integer
    title: Date event count

    white_blood_count*: integer
    title: White blood count

    platelet*: integer
    title: Platelet

    is_recently_traveled*: boolean
    title: Is recently traveled

    gender*: string
    title: Gender
    
    symptom*: string
    title: Symptom
    
    laboratory_type*: string
    title: Laboratory type
    
    collected_specimen_type*: string
    title: Collected specimen type
 
}
```

More details can be found [here](https://ftdiagnose.pythonanywhere.com/swagger/)