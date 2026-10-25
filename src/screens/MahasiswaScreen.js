import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Alifia Putri', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Budi Santoso', prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Citra Dewi', prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Dimas Anggara', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Eka Nur Safitri', prodi: 'Sistem Informasi' },
];

export default function MahasiswaScreen() {
  const [keyword, setKeyword] = useState('');

  const hasilFilter = DAFTAR_MAHASISWA.filter((item) =>
    item.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Daftar Mahasiswa</Text>
        <Text style={styles.subheading}>
          Cari dan filter mahasiswa aktif ({hasilFilter.length} ditemukan)
        </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Cari berdasarkan nama mahasiswa..."
        placeholderTextColor="#A1A1AA"
        value={keyword}
        onChangeText={setKeyword}
        autoCorrect={false}
      />

      <FlatList
        data={hasilFilter}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nama}>{item.nama}</Text>
            <Text style={styles.prodi}>{item.prodi}</Text>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyCard}>
            <Text style={styles.emptyTitle}>Data tidak ditemukan!</Text>
            <Text style={styles.emptySubtitle}>
              Tidak ada hasil pencarian untuk "{keyword}".
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginBottom: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#18181B',
    letterSpacing: -0.3,
    textAlign: 'left',
  },
  subheading: {
    fontSize: 13,
    color: '#71717A',
    marginTop: 4,
    lineHeight: 18,
    textAlign: 'left',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4E4E7',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#18181B',
    marginBottom: 16,
    textAlign: 'left',
  },
  listContent: {
    paddingBottom: 20,
  },
  item: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4E4E7',
    borderRadius: 6,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  nama: {
    fontSize: 15,
    fontWeight: '600',
    color: '#18181B',
    lineHeight: 20,
    textAlign: 'left',
  },
  prodi: {
    fontSize: 13,
    color: '#71717A',
    marginTop: 4,
    lineHeight: 18,
    textAlign: 'left',
  },
  emptyCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4E4E7',
    borderRadius: 6,
    padding: 16,
    marginTop: 4,
  },
  emptyTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#18181B',
    marginBottom: 4,
    textAlign: 'left',
  },
  emptySubtitle: {
    fontSize: 12,
    color: '#71717A',
    lineHeight: 18,
    textAlign: 'left',
  },
});