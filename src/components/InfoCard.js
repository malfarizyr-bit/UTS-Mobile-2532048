import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function InfoCard({ title, status, onPress }) {
  const isSelesai = status === 'selesai';

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <View
          style={[
            styles.badge,
            isSelesai ? styles.badgeSelesai : styles.badgeProses,
          ]}
        >
          <Text
            style={[
              styles.badgeText,
              isSelesai ? styles.badgeTextSelesai : styles.badgeTextProses,
            ]}
          >
            {isSelesai ? 'Selesai' : 'Proses'}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4E4E7',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: '#18181B',
    lineHeight: 20,
    textAlign: 'left',
    marginRight: 12,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
  badgeSelesai: {
    backgroundColor: '#F0FDF4',
    borderColor: '#BBF7D0',
  },
  badgeProses: {
    backgroundColor: '#FFF7ED',
    borderColor: '#FED7AA',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  badgeTextSelesai: {
    color: '#15803D',
  },
  badgeTextProses: {
    color: '#C2410C',
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#18181B',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
    marginTop: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'left',
  },
});
