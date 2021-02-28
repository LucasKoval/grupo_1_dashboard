import React from 'react';
import PageHeading from '../../assets/PageHeading'
import UserCard from '../../components/cards/userCard';
import ProductCard from '../../components/cards/productCard';
import CashCard from '../../components/cards/cashCard';
import Box from '../../components/boxes/Box'
import DetailBox from '../../components/boxes/DetailBox'
import Block from '../../components/boxes/Block'

function Main() {
    return (
        <div id="content">
            <div className="container-fluid">
                
                <PageHeading title='BABIEKA - Main'/>
                
                <div className="row">   {/*---- CARD SECTION ----*/}
                    <ProductCard title='Artículos en la base de datos' apiUrl='products' />
                    <CashCard title='Costo Total de Artículos' apiUrl='products' />
                    <UserCard title='Total de usuarios registrados' apiUrl='users' />
                </div>
                
                <div className="row">   {/*---- BOX SECTION ----*/}
                    <Box title='Categorías en la Base de Datos'>
                        <Block name='Casual' apiUrl='products' filter='casual' />
                        <Block name='Fiesta' apiUrl='products' filter='fiesta' />
                        <Block name='Sale' apiUrl='products' filter='sale' />
                    </Box>
                    <Box title='Listado de Roles'>
                        <ul className="list-group list-group-flush text-center">
                            <li className="list-group-item">Manager</li>
                            <li className="list-group-item">Admin</li>
                            <li className="list-group-item">Developer</li>
                            <li className="list-group-item">Tester</li>
                            <li className="list-group-item">Client</li>
                        </ul>
                    </Box>
                    <DetailBox title='Ultimo Artículo Cargado' apiUrl='products' />
                </div>
                
            </div>
        </div>
    );
}

export default Main;