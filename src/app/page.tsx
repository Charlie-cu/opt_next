import type { Metadata } from 'next';
import Title from '@/components/ui/title';
import content from '@/data/content.json';
import ButtonLink from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: content.name,
  description: content.description,
};

export default function Home() {
  return (
    <main className="flex h-[100vh] w-[100vw]  flex-col items-center px-8 py-10">
      <Title title={content.name} subtitle={content.description} />
      <div className="flex h-[50vh] flex-col  items-center justify-center gap-2">
        <div className="mt-10 flex flex-col gap-2">
          <p className="text-center text-2xl uppercase">Utilidades</p>
          <ButtonLink text="Contador de puntos" href="/contador-de-puntos" />
        </div>

        <div className="mt-10 flex flex-col gap-2">
          <p className="text-center text-2xl uppercase">Próximamente</p>
          <ButtonLink text="Valores de las cartas" href="/" />
          <ButtonLink text="Calculadora del envido" href="/" />
        </div>
      </div>
      <p className="mt-20">
        @Carlos Jorge Lopez Jorge @Arletis Alejandra Hernandez Hidalgo @Estefania De Los Angeles Armas Martin {' '}
        
        .
      </p>
    </main>
  );
}
