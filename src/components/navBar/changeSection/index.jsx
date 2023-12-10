import { useContext, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import { NativeSelect, Stack } from '@mui/material';
import { SectionContext } from '../../../context/SectionContext';
import { useStyles } from './changeSection.styles';


export default function SelectSmall({ data }) {
    const classes = useStyles();
    const [age, setAge] = useState('');
    const { section, setSection } = useContext(SectionContext);
    const handleChange = (event) => {
        setAge(event.target.value);
        setSection(event.target.value)
    };


    return (
        <Stack>
            <FormControl sx={{ minWidth: 120, marginTop: '1.7rem', fontWeight: 'bold', color: 'black' }} size="small">
                <NativeSelect
                    sx={{ fontWeight: 'bold', color: 'black', display: 'flex', justifyContent: 'center', textAlign: 'center' }}
                    value={age}
                    defaultValue='museos'
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <option
                        value='museos'
                        selected={true}
                        autoFocus={true} className={classes.option}>Museos</option>
                    <option value='recreacionales' className={classes.option}>Lug. Recreacionales</option>
                    <option value='pubs' className={classes.option}>Pub Restaurante</option>
                    <option value='iglesias' className={classes.option}>Iglesias</option>
                    <option value='miradores' className={classes.option}>Miscelaneos</option>
                </NativeSelect>
                <FormHelperText>Revise nuestros demas apartados</FormHelperText>
            </FormControl>
        </Stack>
    );
}
