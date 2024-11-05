import SubscribeButton from '@/components/SubscribeButton';
import styles from './home.module.scss';
import { stripe } from './services/stripe';
import { GetStaticProps } from 'next'

interface HomeProps {
  product: {
    priceId: string,
    amount: number
  }
}

export default function Home( { product }: HomeProps ) {
  return (
    <>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Hey, welcome</span>
          <h1>News about the <span>React</span> world</h1>
          <p>
            Get acess to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/Mulher.svg" alt="" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('prod_RA7TtAOFazhRfV', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount || 0 / 100)
  }

  return {
    props: {
      product
    }
  }
}

