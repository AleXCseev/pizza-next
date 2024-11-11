import { Container, Title, Filters, ProductsGroupeList } from "@/components/shared";
import { TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar/>
      <Container className="pb-14 mt-10">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters/>
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
                <ProductsGroupeList 
                  title="Пиццы"
                  categoryId={1}
                  items={[
                    {
                      id: 1,
                      name: 'Пицца 1',
                      imageUrl: 'https://kinai.com.ua/storage/uploads/product/source/r54thbckQpLDtlzjpIZcVle2AmxrPVjWIPc0AIvN.jpg',
                      items: [{ price: 100 }]
                    },
                    {
                      id: 2,
                      name: 'Пицца 2',
                      imageUrl: 'https://kinai.com.ua/storage/uploads/product/source/r54thbckQpLDtlzjpIZcVle2AmxrPVjWIPc0AIvN.jpg',
                      items: [{ price: 100 }]
                    },
                    {
                      id: 3,
                      name: 'Пицца 3',
                      imageUrl: 'https://kinai.com.ua/storage/uploads/product/source/r54thbckQpLDtlzjpIZcVle2AmxrPVjWIPc0AIvN.jpg',
                      items: [{ price: 100 }]
                    },
                    {
                      id: 4,
                      name: 'Пицца 4',
                      imageUrl: 'https://kinai.com.ua/storage/uploads/product/source/r54thbckQpLDtlzjpIZcVle2AmxrPVjWIPc0AIvN.jpg',
                      items: [{ price: 100 }]
                    },
                    {
                      id: 5,
                      name: 'Пицца 5',
                      imageUrl: 'https://kinai.com.ua/storage/uploads/product/source/r54thbckQpLDtlzjpIZcVle2AmxrPVjWIPc0AIvN.jpg',
                      items: [{ price: 100 }]
                    },
                  ]}
                />

                <ProductsGroupeList 
                  title="Комбо"
                  categoryId={2}
                  items={[
                    {
                      id: 1,
                      name: 'Пицца 1',
                      imageUrl: 'https://kinai.com.ua/storage/uploads/product/source/r54thbckQpLDtlzjpIZcVle2AmxrPVjWIPc0AIvN.jpg',
                      items: [{ price: 100 }]
                    },
                    {
                      id: 2,
                      name: 'Пицца 2',
                      imageUrl: 'https://kinai.com.ua/storage/uploads/product/source/r54thbckQpLDtlzjpIZcVle2AmxrPVjWIPc0AIvN.jpg',
                      items: [{ price: 100 }]
                    },
                    {
                      id: 3,
                      name: 'Пицца 3',
                      imageUrl: 'https://kinai.com.ua/storage/uploads/product/source/r54thbckQpLDtlzjpIZcVle2AmxrPVjWIPc0AIvN.jpg',
                      items: [{ price: 100 }]
                    },
                    {
                      id: 4,
                      name: 'Пицца 4',
                      imageUrl: 'https://kinai.com.ua/storage/uploads/product/source/r54thbckQpLDtlzjpIZcVle2AmxrPVjWIPc0AIvN.jpg',
                      items: [{ price: 100 }]
                    },
                    {
                      id: 5,
                      name: 'Пицца 5',
                      imageUrl: 'https://kinai.com.ua/storage/uploads/product/source/r54thbckQpLDtlzjpIZcVle2AmxrPVjWIPc0AIvN.jpg',
                      items: [{ price: 100 }]
                    },
                  ]}
                />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
