import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Text, Alert } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";

const CONTENT = {
  tableHead: ["Actions","Staff Number", "Staff Name", "Staff Email", "Department","Salary"],
};

export default function ZamaraTable({tableData,onDelete,onUpdate,disabled,updating,deleting}) {
  const element = (data, index) => (
    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
      <TouchableOpacity style={{marginRight:20, marginLeft:-40}} onPress={() => onUpdate(data)} disabled={disabled}>
        <View style={styles.btn}>
          {!updating? <Text style={styles.btnText}>Update</Text> : <Text style={styles.btnText}>Updating</Text>}
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{marginRight:-40}} onPress={() => onDelete(data)} disabled={disabled}>
        <View style={styles.btn}>
          {!deleting? <Text style={styles.btnText}>Delete</Text> : <Text style={styles.btnText}>Deleting</Text>}
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={{ borderWidth: 1 }}>
            <Row
              data={CONTENT.tableHead}
              widthArr={[160, 150, 155, 150, 150, 100]}
              style={styles.head}
              textStyle={styles.text}
            />
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{ borderWidth: 1 }}>
              {tableData?.map((rowData, index) => (
                <TableWrapper key={index} style={styles.wrapper}>
                  {rowData.map((cellData,cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 0? element(cellData,index) : cellData} textStyle={styles.text}  widthArr={[100, 100, 100, 150, 100, 100]}/>
                  ))}
                </TableWrapper>
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    paddingTop: 30,
    backgroundColor: "#fff",
    width: "100%",
  },
  head: {
    height: 40,
    backgroundColor: "orange",
  },
  wrapper: {
    flexDirection: "row",
  },
  dataWrapper: {
    marginTop: -1,
  },
  row: {
    height: 28,
  },
  text: {
    textAlign: "center",
  },
  btn: { 
    width: 58, 
    height: 18, 
    backgroundColor: "#78B7BB", 
    borderRadius: 2 
  },
  btnText: { 
    textAlign: "center", 
    color: "#fff" 
  },
});