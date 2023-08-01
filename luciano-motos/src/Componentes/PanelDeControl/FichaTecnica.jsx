import { useState, useEffect } from "react";
import React from "react";
function FichaTecnica({ parameters, dsUpdate }) {

    const data_sheet_template = {
        "main_data":[
        {
            "label": "Frenos",
            "value": "brake",
            "mode": "select",
            "options": [{
                "label": "Delantero",
                "value": "forward"
            },
            {
                "label": "De tambor",
                "value": "drum_brake"
            },
            {
                "label": "Trasero",
                "value": "rear"
            },
            {
                "label": "ABS",
                "value": "abs"
            },
            {
                "label": "Delantero y trasero",
                "value": "forward_rear"
            },
            {
                "label": "CBS",
                "value": "cbs"
            }]
        },
        {
            "label": "Cilindrada",
            "value": "displacement",
            "mode": "number"
        }, 
        {
            "label": "Tipo de combustible",
            "value": "fuel_type",
            "mode": "select",
            "options": [
                {
                    "label": "Diesel",
                    "value": "diesel"
                },
                {
                    "label": "Electrico",
                    "value": "electric"
                },
                {
                    "label": "Nafta",
                    "value": "fuel"
                },
                {
                    "label": "Nafta/GNC",
                    "value": "fuel_gnc"
                },
                {
                    "label": "GNC",
                    "value": "gnc"
                },
                {
                    "label": "Hibrido",
                    "value": "hibrid"
                },
                {
                    "label": "Hibrido Diesel",
                    "value": "hibrid_diesel"
                },
                {
                    "label": "Hibrido Nafta",
                    "value": "hibrid_fuel"
                }
            ]
        },
        {
            "label": "Motor",
            "value": "engine",
            "mode": "select",
            "options": [{"label":"2 tiempos","value":"2_times"},{"label":"4 tiempos","value":"4_times"}]
        },
        {
            "label": "Potencia (en cv)",
            "value": "power_engine",
            "mode": "number"
        }
    
    ],
    "equipment": [
        {
            "label": "Capacidad del tanque",
            "value": "fuel_capacity",
            "mode": "number"
        },
        {
            "label": "Sistema de arranque",
            "value": "start_system",
            "mode": "select",
            "options": [{"label":"Electrico y pedal","value":"electric_pedal"},{"label":"Electrico","value":"electric"},{"label":"pedal","value":"pedal"}]
        },
        {
            "label": "Transmisión",
            "value": "transmission",
            "mode": "select",
            "options": [{"label":"Semiautomatico","value":"semiautomatic"},{"label":"Automatica","value":"automatic"},{"label":"Manual","value":"manual"}]
        },
        {
            "label": "Velocidad maxima",
            "value": "max_speed",
            "mode": "number"
        },
        {
            "label": "Altura del asiento (cm)",
            "value": "seat_height",
            "mode": "number"
        },
        {
            "label": "Numero de velocidades",
            "value": "speed_count",
            "mode": "number"
        },
        {
            "label": "Tipo de bateria",
            "value": "batery_type",
            "mode": "select",
            "options": [{"label":"Litio","value":"litium"},{"label":"Acido en gel","value":"acid"}]
        },
        {
            "label": "Cantidad de baterias",
            "value": "batery_count",
            "mode": "number"
        },
        {
            "label": "Capacidad de la bateria (mAh)",
            "value": "batery_capacity",
            "mode": "number"
        },
        {
            "label": "Voltaje de la bateria",
            "value": "batery_volt",
            "mode": "number"
        },
        {
            "label": "Autonomia de la bateria (km)",
            "value": "batery_life_time",
            "mode": "number"
        },
        {
            "label": "Tiempo de carga (horas)",
            "value": "batery_charge_time",
            "mode": "number"
        },
        {
            "label": "Peso de la bateria (gramos)",
            "value": "batery_weight",
            "mode": "number"
        }
    ],
    "dimensions": [
        {
            "label": "Distancia entre ejes (cm)",
            "value": "axis_distance",
            "mode": "number"
        },
        {
            "label": "Largo (m)",
            "value": "length",
            "mode": "number"
        },
        {
            "label": "Altura (m)",
            "value": "height",
            "mode": "number"
        },
        {
            "label": "Ancho (m)",
            "value": "width",
            "mode": "number"
        },
        {
            "label": "Peso (kg)",
            "value": "weight",
            "mode": "number"
        }
    ]

};

    const ds_category_label = {
        "main_data": "Datos principales",
        "equipment": "Equipamiento",
        "dimensions": "Dimensiones"
    }
    const [form_data, setFormData] = useState({});
    const registerData = async (data,key) => {
        console.log(data,key)
        //Register the form data
        const dst_keys = Object.keys(data_sheet_template);
        const r = async (data_sheet_template,dst_keys,data,key) => {
            let fda = {"main_data":[],"equipment":[],"dimensions":[]};
            for(let i=0;i<dst_keys.length;i++) {
                let dsc = data_sheet_template[dst_keys[i]];
                let fields = [];
                for(let j=0;j<dsc.length;j++) {
                    let k = dsc[j]['value'];
                    if(data != null && key == null) {
                        fields.push({[k]:data[dst_keys[i]][k]});
                    }
                    else if(data != null && key != null) {
                        if(k == key) {
                            fields.push({[k]:data});
                        }
                        else {
                            fields.push({[k]:''});
                        }
                    }
                    else {
                        if(dsc[j]['mode'] == "select") {
                            fields.push({[k]:dsc[j]['options'][0].value}); //Fill with first option
                        }
                        else {
                            fields.push({[k]:''});
                        }
                        
                    }   
                }
               fda[dst_keys[i]] = fields;
                //console.log(form_data);
            }
            return fda;
        }
        
        return await r(data_sheet_template,dst_keys,data,key).then(async (response) => {
            return response;
        });
        
    };

    let data_imported;
    if(parameters != null) {
        data_imported = parameters.data_imported;
    }

    useEffect(async () => {
        // Set default values once when the component mounts
        if(data_imported != null) {
            registerData(data_imported);
        }
        else {
            console.log("Re");
            const r = await registerData().then((res)=> {
                console.log(res);
                setFormData(res);
                console.log(form_data);
            });
        }
    }, []);
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        registerData(value,name);
    }

return (
    <div>
    {
        Object.keys(data_sheet_template).map((key,index) => (
        <div>
            <h3>{ds_category_label[key]}</h3>
        <div className="contenedor-input-group">
            {data_sheet_template[key].map((option, index) => (
        <div>
        <label htmlFor="brand">{option.label}</label>
        { Object.keys(form_data).length > 1 &&
            <div className='contenedor-input-panel'>
                { option.mode == 'text' && <input type="text" key={index} name={option.value} value={form_data['data']['main_data'][option.value]} placeholder={option.label} onChange={handleChange} />}
                { option.mode == 'number' && <input type="number" key={index} name={option.value} value={form_data['data']['main_data'][option.value]} placeholder={option.label} onChange={handleChange} /> }
                { option.mode == 'select' && <select key={index} name={option.value} value={form_data['data']['main_data'][option.value]} onChange={handleChange} >{option.options.map((o,i) => (
                    <option value={o.value}>{o.label}</option>
                ))}</select>}
            </div>
        }

        { Object.keys(form_data).length == 0 &&
            <div>
                { option.mode == 'text' && <input type="text" key={index} name={option.value} placeholder={option.label} onChange={handleChange} />}
                { option.mode == 'number' && <input type="number" key={index} name={option.value} placeholder={option.label} onChange={handleChange} /> }
                { option.mode == 'select' && <select key={index} name={option.value} onChange={handleChange} >{option.options.map((o,i) => (
                    <option value={o.value}>{o.label}</option>
                ))}</select>}
            </div>
        }
        </div>
            ))}
            </div>
        </div>
            ))}

</div>
)

}

export default FichaTecnica