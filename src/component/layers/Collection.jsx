import React from 'react'
import CollectionCard from './CollectionCard'
import Collection1 from '../../../public/collection1.png'
import Collection2 from '../../../public/collection2.png'
import Collection3 from '../../../public/collection3.png'
import collectionillus from '../../../public/collectionillus.png'
import Container from './Container'

const Collection = () => {
    return (
        <>
            <div className="collection py-10 sm:py-32 slg:pt-[217px] slg:pb-[236px] relative">
                <Container>
                    <h2 className='font-bold text-[40px] sm:text-[50px] slg:text-[4.00rem] leading-none text-[#000] text-center mb-5 sm:mb-[70px] slg:mb-[129px]'>New Collection</h2>
                    <div className="flex slg:justify-between slg:flex-row flex-col gap-5">
                        <CollectionCard img={Collection1} text="Sweater" />
                        <CollectionCard img={Collection2} text="Jeans" />
                        <CollectionCard img={Collection3} text="Baskets" />
                    </div>
                </Container>
                    <img className='absolute right-[200px] bottom-[136px] z-[-1]' src={collectionillus} alt="" />
            </div>
        </>
    )
}

export default Collection