import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Platform,
} from 'react-native';
import InfoCard from './src/components/InfoCard';
import MahasiswaScreen from './src/screens/MahasiswaScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState('tugas');

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F4F5" />
      <View style={styles.container}>
        {activeTab === 'tugas' ? (
          <View style={styles.page}>
            <View style={styles.header}>
              <Text style={styles.appTitle}>Status Pengerjaan</Text>
              <Text style={styles.appSubtitle}>
                Tinjauan progress tugas dan evaluasi praktikum
              </Text>
            </View>

            <View style={styles.summaryBox}>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryNum}>2</Text>
                <Text style={styles.summaryLabel}>Total Tugas</Text>
              </View>
              <View style={styles.summaryDivider} />
              <View style={styles.summaryItem}>
                <Text style={[styles.summaryNum, styles.textSuccess]}>1</Text>
                <Text style={styles.summaryLabel}>Selesai</Text>
              </View>
              <View style={styles.summaryDivider} />
              <View style={styles.summaryItem}>
                <Text style={[styles.summaryNum, styles.textWarning]}>1</Text>
                <Text style={styles.summaryLabel}>Proses</Text>
              </View>
            </View>

            <Text style={styles.sectionLabel}>Daftar Tugas Aktif</Text>

            <InfoCard
              title="Tugas Pemrograman Mobile"
              status="selesai"
              onPress={() => Alert.alert('Detail', 'Tugas Pemrograman Mobile: selesai')}
            />
            <InfoCard
              title="Laporan Praktikum Jobsheet 05"
              status="proses"
              onPress={() => Alert.alert('Detail', 'Laporan Praktikum: masih proses')}
            />
          </View>
        ) : (
          <View style={styles.page}>
            <MahasiswaScreen />
          </View>
        )}
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={[styles.navTab, activeTab === 'tugas' && styles.navTabActive]}
          onPress={() => setActiveTab('tugas')}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.navTabText,
              activeTab === 'tugas' && styles.navTabTextActive,
            ]}
          >
            Status Tugas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navTab,
            activeTab === 'mahasiswa' && styles.navTabActive,
          ]}
          onPress={() => setActiveTab('mahasiswa')}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.navTabText,
              activeTab === 'mahasiswa' && styles.navTabTextActive,
            ]}
          >
            Daftar Mahasiswa
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F4F4F5',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  page: {
    flex: 1,
  },
  header: {
    marginBottom: 20,
  },
  appTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#18181B',
    letterSpacing: -0.3,
    textAlign: 'left',
  },
  appSubtitle: {
    fontSize: 13,
    color: '#71717A',
    marginTop: 4,
    lineHeight: 18,
    textAlign: 'left',
  },
  summaryBox: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4E4E7',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  summaryItem: {
    alignItems: 'center',
    flex: 1,
  },
  summaryNum: {
    fontSize: 18,
    fontWeight: '700',
    color: '#18181B',
  },
  summaryLabel: {
    fontSize: 11,
    color: '#71717A',
    marginTop: 2,
    fontWeight: '500',
  },
  summaryDivider: {
    width: 1,
    height: 24,
    backgroundColor: '#E4E4E7',
  },
  textSuccess: {
    color: '#15803D',
  },
  textWarning: {
    color: '#C2410C',
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#52525B',
    marginBottom: 10,
    letterSpacing: 0.1,
    textAlign: 'left',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E4E4E7',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: Platform.OS === 'ios' ? 24 : 12,
    gap: 8,
  },
  navTab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  navTabActive: {
    backgroundColor: '#18181B',
  },
  navTabText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#71717A',
  },
  navTabTextActive: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
