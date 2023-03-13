import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";

const CONTENT = {
  tableHead: ["Staff Number", "Staff Name", "Staff Email", "Department","Salary"],
  tableData: [
    ["1", "2", "3","4","5"],
    ["a", "b", "c","d","e"],
    ["1", "2", "3","4","5"],
    ["a", "b", "c","d","e"],
  ],
};

export default function ZamaraTable() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={{ borderWidth: 1 }}>
            <Row
              data={CONTENT.tableHead}
              // flexArr={[1, 1, 1, 1]}
              widthArr={[100, 100, 100, 100, 100]}
              style={styles.head}
              textStyle={styles.text}
            />
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{ borderWidth: 1 }}>
              {CONTENT.tableData.map((rowData, index) => (
                <TableWrapper style={styles.wrapper}>
                  {rowData.map((cellData,cellIndex) => (
                    <Cell key={cellIndex} data={cellData} textStyle={styles.text} widthArr={[100, 100, 100, 100, 100]}/>
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
    marginTop: -1 
  },
  row: {
    height: 28,
  },
  text: {
    textAlign: "center",
  },
});