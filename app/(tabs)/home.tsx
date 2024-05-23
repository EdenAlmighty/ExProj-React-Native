import { EmptyState } from '@/components/EmptyState';
import { SearchInput } from '@/components/SearchInput';
import { Trending } from '@/components/Trending';
import { images } from '@/constants';
import React, { useState } from 'react';
import { FlatList, Image, RefreshControl, RefreshControlComponent, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  const [refreshing, setRefreshing] = useState(false)

  async function onRefresh(){
    setRefreshing(true)

    setRefreshing(false)
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
        // data={[]}
        data={[{ id: '1' }, { id: '2' }, { id: '3' }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text className='text-3xl text-white'>{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className='my-6 px-4 space-y-6'>
            <View className='justify-between flex-row items-start mb-6'>
              <View>
                <Text className='font-pmedium text-sm text-gray-100'>
                  Welcome Back
                </Text>
                <Text className='text-2xl font-psemibold text-white'>
                  JSMastery
                </Text>
              </View>

              <View className='mt-1.5'>
                <Image
                  source={images.logoSmall}
                  className='w-9 h-10'
                  resizeMode="contain"
                />
              </View>
            </View>

            <SearchInput />
            <View className='w-full flex-1 pt-5 pb-8'>
              <Text className='text-gray-100 text-lg font-pregular mb-3'>
                Latest Videos
              </Text>

              <Trending posts={[{ id: '1' }, { id: '2' }, { id: '3' }] ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
          title="No Videos Found"
          subtitle="Be the first to create a video!"
          />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
    </SafeAreaView>
  );
}