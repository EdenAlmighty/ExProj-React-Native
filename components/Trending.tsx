import React from 'react';
import { FlatList, FlatListProps, ListRenderItem, Text } from 'react-native';

interface Post {
  id: string
}

interface TrendingProps extends Omit<FlatListProps<Post>, 'data' | 'renderItem'> {
  posts: Post[];
  renderItem?: ListRenderItem<Post>
}

export function Trending({ posts, renderItem, ...rest }: TrendingProps) {
  const defaultRenderItem: ListRenderItem<Post> = ({ item }) => (
    <Text className='text-3xl text-white'>{item.id}</Text>
  );

  return (
    <FlatList
      data={posts}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={renderItem || defaultRenderItem}
      {...rest}
    />
  )
}
