/*import { Text, View } from 'react-native';

const Perfil = () => {
    return (
        <View>
            <Text>Nombre: Karen Olvera Ramírez</Text>
            <Text>Carrera: Ingeniería en Sistemas</Text>
            <Text>Materia: Aplicacion Móvil</Text>
            <Text>Cuatrimestre: 9no</Text>
        </View>
    );
}

/*export { Perfil };*/

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export const Perfil = ({ nombre, carrera, materia, cuatri }) => {
    const [mostrar, setMostrar] = useState(false);
    return (
        <View>
            <Text>{nombre}</Text>
            {mostrar && 
            <>
                <Text>{carrera}</Text>
                <Text>{materia}</Text>
                <Text>{cuatri}</Text>
            </>
            }
            <Button title="ver perfil" onPress={() => setMostrar(!mostrar)} />
        </View>
    );
};

export default Perfil;