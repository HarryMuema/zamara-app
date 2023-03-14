import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, ToastAndroid, View } from "react-native";
import ZamaraInputs from "../common/ZamaraInputs";
import { Form, Formik, setIn } from "formik";
import ZamaraTable from "../common/ZamaraTable";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";

const StaffPage = () => {
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [isPassword, setIsPassword] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [initialValues, setInitialvalues] = useState({"staffNumber":'', "staffName":'', "staffEmail":'', "department":'', "salary":''});
  const [data, setData] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [erroredStaffNumber, setErroredStaffNumber] = useState(false);
  const [erroredStaffName, setErroredStaffName] = useState(false);
  const [erroredStaffEmail, setErroredStaffEmail] = useState(false);
  const [erroredDepartment, setErroredDepartment] = useState(false);
  const [erroredSalary, setErroredSalary] = useState(false);

  const getTableData = async () => {
     const url = `https://crudcrud.com/api/3357f5b84c60467b934c8a3f9b905793/zamara`;

    await axios
      .get(url)
      .then((response) => {
        const result = response.data;
        const resultArray = result.map((row,index) => ([row._id,row.staffNumber, row.staffName, row.staffEmail, row.department, row.salary]))
        setTableData(resultArray);
      })
      .catch((error) => {
        ToastAndroid.show("User not found", ToastAndroid.LONG);
      });
  };

  useEffect(() => {
    getTableData();
  }, []);

   const onCreateStaff = async (values, setSubmitting) => {
    setDisabled(true);
     setLoading(true);
     const url =
       "https://crudcrud.com/api/3357f5b84c60467b934c8a3f9b905793/zamara";

     await axios
       .post(url, values)
       .then((response) => {
         const result = response.data;
         ToastAndroid.show("Staff created successfully", ToastAndroid.LONG);
         getTableData()
         setSubmitting(false);
         setLoading(false);
         setDisabled(false);
        //  navigation.navigate("Menu", { screen: "Home", params: { result } });
       })
       .catch((error) => {
         ToastAndroid.show("Staff creation failed", ToastAndroid.LONG);
         setLoading(false);
         setDisabled(false)
       });
   };

   const onUpdate=async (data) => {
     setUpdating(true)
    setData(data)
   }

  const onUpdateStaff = async (values, setSubmitting) => {
    console.log(values)
    const url = `https://crudcrud.com/api/3357f5b84c60467b934c8a3f9b905793/zamara/${data}`;
    
    await axios.put(url,values).then((response) => {
        ToastAndroid.show("Staff updated successfully", ToastAndroid.LONG);
        setUpdating(false)
        getTableData()
      })
      .catch((error) => {
        console.log(error)
        ToastAndroid.show("Staff update failed", ToastAndroid.LONG);
        setUpdating(false);
      });
  };

  const onDeleteStaff = async (data) => {
    setDisabled(true);
    setDeleting(true);
    const url = `https://crudcrud.com/api/3357f5b84c60467b934c8a3f9b905793/zamara/${data}`;

    await axios
      .delete(url)
      .then((response) => {
        ToastAndroid.show("Staff deleted successfully", ToastAndroid.LONG);
        getTableData();
        setDeleting(false);
        setDisabled(false);
      })
      .catch((error) => {
        ToastAndroid.show("Staff deletion failed", ToastAndroid.LONG);
        setDeleting(false);
        setDisabled(false);
      });
  };

  return (
    <View style={styles.staffcontainer}>
      <ZamaraTable tableData={tableData} onUpdate={onUpdate} onDelete={onDeleteStaff} disabled={disabled} loading={loading}/>
      {updating ? <Text style={styles.createstaff}>Update staff</Text> : <Text style={styles.createstaff}>Create new staff</Text>}
      <ScrollView style={styles.scroll}>
        <Formik
          initialValues={initialValues}
          validate={values => {
            const err = {}
            if (!values.staffNumber) {
              err.staffNumber = "Staff Number required";
              setErroredStaffNumber(true);
            } else {
              setErroredStaffNumber(false);
            }
            if (!values.staffName) {
              err.staffName = "Staff Name required";
              setErroredStaffName(true);
            } else {
              setErroredStaffName(false);
            }
              if (!values.staffEmail) {
                err.staffEmail = "Staff Email required";
                setErroredStaffEmail(true);
              } else {
                setErroredStaffEmail(false);
              }
              if (!values.department) {
                err.department = "Department required";
                setErroredDepartment(true);
              } else {
                setErroredDepartment(false);
              }
            if (!values.salary){
              err.salary = 'Salary required'
              setErroredSalary(true);
            }else{
              setErroredSalary(false)
            }
            return err
          }}
          onSubmit={(values, {setSubmitting}) =>{
            setTimeout(() =>{
              {updating? onUpdateStaff(values,setSubmitting) : onCreateStaff(values,setSubmitting)}
            },400)
          }}
        >
          {({values, errors, handleChange, handleSubmit}) => (
            <>
              <ZamaraInputs label={"Staff Number"} isPassword={!isPassword} onChangeText={handleChange('staffNumber')} value={values.staffNumber} errored={erroredStaffNumber} error={errors.staffNumber}/>
              <ZamaraInputs label={"Staff Name"} isPassword={!isPassword} onChangeText={handleChange('staffName')} value={values.staffName} errored={erroredStaffName} error={errors.staffName}/>
              <ZamaraInputs label={"Staff Email"} isPassword={!isPassword} onChangeText={handleChange('staffEmail')} value={values.staffEmail} errored={erroredStaffEmail} error={errors.staffEmail}/>
              <ZamaraInputs label={"Department"} isPassword={!isPassword} onChangeText={handleChange('department')} value={values.department} errored={erroredDepartment} error={errors.department}/>
              <ZamaraInputs label={"Salary"} isPassword={!isPassword} onChangeText={handleChange('salary')} value={values.salary} errored={erroredSalary} error={errors.salary}/>
              <Button title={updating? loading? "Updating staff..." : "Update" :loading? "Creating staff member..." : "Create Staff" } disabled={disabled} color="#795548" onPress={handleSubmit}/>
            </>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  staffcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  scroll:{
    flex: 0.5,
    width:'100%'
  },
  createstaff:{
    fontSize:24,
    fontWeight:'bold',
    marginVertical:20,
    alignSelf:'center',
  }
});
export default StaffPage;
