import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { chores } from './mockedChores';
import { MUSData, mUSData } from './mockedUserStatisticData';

export default function ChoresPieCharts() {
  return (
    <View style={styles.container}>
      {chores.map((chore) => (
        <View key={chore.id} style={styles.chartContainer}>
          <ChorePie choreId={chore.id as keyof MUSData} />
          <Text style={styles.choreName}>{chore.name}</Text>
        </View>
      ))}
    </View>
  );
}

function ChorePie({ choreId }: { choreId: keyof MUSData }) {
  const choreDataScore = mUSData.map((person) => ({
    key: person.id,
    value: Number(person[choreId]),
    color: getColorForPerson(person.id),
  }));

  const total = getTotalForChore(choreDataScore);
  let cumulativePercentage = 0;

  return (
    <View style={styles.pieContainer}>
      {choreDataScore.map((slice, index) => {
        const percentage = (slice.value / total) * 100;
        const angle = (percentage / 100) * 360;

        const style = {
          transform: [
            { rotate: `${cumulativePercentage}deg` },
            { translateY: -50 }, // Center the pie chart
            { rotate: `${angle}deg` },
          ],
          backgroundColor: slice.color,
          height: 100,
          width: 100,
        };

        cumulativePercentage += angle;

        return <View key={index} style={[styles.pieSlice, style]} />;
      })}
      {/* Labels */}
    </View>
  );
}

// Helper functions
function getColorForPerson(personId: string) {
  const colors = {
    squid: '#FF69B4',
    fox: '#FFA500',
    frog: '#008000',
    owl: '#D2691E',
  };
  return colors[personId as keyof typeof colors] || '#000'; // Default color if no match
}

function getTotalForChore(data: any[]) {
  return data.reduce((sum, slice) => sum + slice.value, 0);
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chartContainer: {
    flexDirection: 'column',
    marginBottom: 30,
    alignItems: 'center',
  },
  choreName: {
    fontSize: 18,
    marginTop: 5,
  },
  pieContainer: {
    position: 'relative',
    width: 100,
    height: 100,
    overflow: 'hidden',
    borderRadius: 50, // Make it circular
  },
  pieSlice: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 50, // Make the slice edges rounded
  },
  labelsContainer: {
    marginTop: 10,
  },
});

//
//

//

//

//

// import React from 'react';
// import { ScrollView, StyleSheet, Text, View } from 'react-native';
// import { PieChart } from 'react-native-svg-charts';
// import { chores } from './chores';
// import { MUSData, mUSData } from './mockedUserStatisticData';

// export default function ChoresPieCharts() {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {chores.map((chore) => (
//         <View key={chore.id} style={styles.chartContainer}>
//           <Text style={styles.choreName}>{chore.name}</Text>
//           <ChorePie choreId={chore.id as keyof MUSData} />
//         </View>
//       ))}
//     </ScrollView>
//   );
// }

// function ChorePie({ choreId }: { choreId: keyof MUSData }) {
//   const choreDataScore = mUSData.map((person) => ({
//     key: person.id,
//     value: Number(person[choreId]), // Ensure the value is a number
//     svg: { fill: getColorForPerson(person.id) }, // Set a color for each person
//     arc: { outerRadius: '100%', cornerRadius: 5 },
//   }));

//   return (
//     <View style={styles.pieContainer}>
//       <PieChart
//         style={{ height: 200, width: 200 }}
//         data={choreDataScore}
//         innerRadius="40%"
//         outerRadius="100%"
//         labelRadius="110%"
//       />
//       {/* Add custom labels */}
//       <Labels data={choreDataScore} />
//     </View>
//   );
// }

// type ChoreDataSlice = {
//   key: string;
//   value: number;
//   svg: { fill: string };
//   arc: { outerRadius: string; cornerRadius: number };
// };

// function Labels({ data }: { data: ChoreDataSlice[] }) {
//   const total = getTotalForChore(data);

//   return data.map((slice, index) => {
//     const { value, svg } = slice;
//     const percentage = (value / total) * 100;

//     return (
//       <View key={index} style={styles.labelContainer}>
//         <Text style={[styles.labelText, { color: svg.fill }]}>
//           {percentage.toFixed(0)}%
//         </Text>
//       </View>
//     );
//   });
// }

// // Helper functions

// function getColorForPerson(personId: string) {
//   const colors = {
//     squid: '#FF6384',
//     fox: '#36A2EB',
//     frog: '#FFCE56',
//     owl: '#4BC0C0',
//   };
//   return colors[personId as keyof typeof colors] || '#000'; // Default color if no match
// }

// function getTotalForChore(data: any[]) {
//   return data.reduce((sum, slice) => sum + slice.value, 0);
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 20,
//   },
//   chartContainer: {
//     marginBottom: 30,
//     alignItems: 'center',
//   },
//   choreName: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   pieContainer: {
//     position: 'relative',
//     alignItems: 'center',
//   },
//   labelContainer: {
//     position: 'absolute',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   labelText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });
