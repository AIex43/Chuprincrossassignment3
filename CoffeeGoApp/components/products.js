export const getProducts = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=8'
  );

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = await response.json();

  return data.map((item, index) => ({
    id: String(item.id),

    title:
      index === 0
        ? 'Espresso'
        : index === 1
        ? 'Cappuccino'
        : index === 2
        ? 'Latte'
        : index === 3
        ? 'Green Tea'
        : index === 4
        ? 'Black Tea'
        : index === 5
        ? 'Mocha'
        : index === 6
        ? 'Americano'
        : 'Hot Chocolate',

    price:
      index === 0
        ? 3
        : index === 1
        ? 4
        : index === 2
        ? 4.5
        : index === 3
        ? 2.5
        : index === 4
        ? 2
        : index === 5
        ? 5
        : index === 6
        ? 3.5
        : 4,

    category:
      index === 0 ||
      index === 1 ||
      index === 2 ||
      index === 6
        ? 'Кава'
        : index === 3 || index === 4
        ? 'Чай'
        : 'Інше',

    imageUrl:
      index === 0
        ? 'https://images.unsplash.com/photo-1511920170033-f8396924c348'
        : index === 1
        ? 'https://images.unsplash.com/photo-1509042239860-f550ce710b93'
        : index === 2
        ? 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735'
        : index === 3
        ? 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7'
        : index === 4
        ? 'https://images.unsplash.com/photo-1505253213348-cd54c92b37a6'
        : index === 5
        ? 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13'
        : index === 6
        ? 'https://images.unsplash.com/photo-1521302080334-4bebac2763a6'
        : 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed',
  }));
};