interface Props {
  params: Promise<{ slug: string }>
}

export default async function RestaurantPage({ params }: Props) {
  const { slug } = await params

  return <h1>{slug}</h1>
}
