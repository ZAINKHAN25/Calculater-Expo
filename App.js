import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  const [expression, setExpression] = useState('00');

  function handleInput(input) {
    if (input === 'C') {
      setExpression('');
    } else if (input === 'DEL') {
      if(expression.startsWith('Syntax Error')){
        setExpression('')
      } else{
        setExpression((prevExpression) => prevExpression.slice(0, -1));
      }
    } else if (input === '=') {
      try {
        const result = eval(expression);
        setExpression(result.toString());
      } catch (error) {
        setExpression('Syntax Error');
      }
    } else {
      // Clear the error if the expression starts with 'Syntax Error'
      if (expression.startsWith('Syntax Error')) {
        setExpression(input);
      } else {
        setExpression((prevExpression) => prevExpression + input);
      }
    }
  }

  function Grayclr({ cntent }) {
    return (
      <TouchableOpacity
        style={[styles.graybg, styles.buttonOfInput]}
        onPress={() => handleInput(cntent)}
      >
        <Text style={[styles.graybgtxt, styles.txtOfInput]}>{cntent}</Text>
      </TouchableOpacity>
    );
  }

  function Yellowclr({ cntent }) {
    return (
      <TouchableOpacity
        style={[styles.yellowbg, styles.buttonOfInput]}
        onPress={() => handleInput(cntent)}
      >
        <Text style={[styles.yellowbgtxt, styles.txtOfInput]}>{cntent}</Text>
      </TouchableOpacity>
    );
  }

  function Blackclr({ cntent }) {
    return (
      <TouchableOpacity
        style={[styles.blackbg, styles.buttonOfInput]}
        onPress={() => handleInput(cntent)}
      >
        <Text style={[styles.blackbgtxt, styles.txtOfInput]}>{cntent}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Mainarea}>
        <Text style={styles.mainTxt}>{expression}</Text>
      </View>
      {/* Keyboard Area */}
      <View style={styles.KeyboardBox}>
        {/* First Line */}
        <View style={styles.rowDiv}>
          <Grayclr cntent={'C'} />
          <Grayclr cntent={'DEL'} />
          <Grayclr cntent={'%'} />
          <Yellowclr cntent={'/'} />
        </View>
        {/* Second Line */}
        <View style={styles.rowDiv}>
          <Blackclr cntent={7} />
          <Blackclr cntent={8} />
          <Blackclr cntent={9} />
          <Yellowclr cntent={'x'} />
        </View>
        {/* Third Line */}
        <View style={styles.rowDiv}>
          <Blackclr cntent={4} />
          <Blackclr cntent={5} />
          <Blackclr cntent={6} />
          <Yellowclr cntent={'-'} />
        </View>
        {/* Fourth Line */}
        <View style={styles.rowDiv}>
          <Blackclr cntent={1} />
          <Blackclr cntent={2} />
          <Blackclr cntent={3} />
          <Yellowclr cntent={'+'} />
        </View>
        {/* Fifth Line */}
        <View style={styles.rowDiv}>
          <TouchableOpacity
            style={[styles.blackbg, styles.zeroButtonOfInput]}
            onPress={() => handleInput('0')}
          >
            <Text style={[styles.blackbgtxt, styles.txtOfInput]}>0</Text>
          </TouchableOpacity>
          <Blackclr cntent={'.'} />
          <Yellowclr cntent={'='} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    // minHeight: '100%',
    width: '100%',
  },
  Mainarea: {
    flex: 1,
    width: '100%',
    padding: '10%',
  },
  mainTxt: {
    color: 'rgba(255,255,255,0.3)',
    fontSize: 30,
    textAlign: 'right',
  },
  KeyboardBox: {
    flex: 2,
    width: '100%',
    paddingTop: 10,
    backgroundColor: 'black'
  },
  rowDiv: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  blackbg: {
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  blackbgtxt: {
    color: 'white',
  },
  yellowbg: {
    backgroundColor: 'orange',
  },
  yellowbgtxt: {
    color: 'white',
  },
  graybg: {
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  graybgtxt: {
    color: 'black',
  },
  txtOfInput: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 25,
  },
  buttonOfInput: {
    borderRadius: 50,
    width: '20%',
    paddingVertical: 20,
  },
  zeroButtonOfInput: {
    borderRadius: 50,
    width: '40%',
    paddingVertical: 20,
  },
});
