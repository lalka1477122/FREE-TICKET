import Image from "next/image";
import { useState } from "react";

export function Home() {
  // Интерфейс для хранения номера и типа транспорта
  interface Ibus {
    number: number;
    type: string;
  }

  // Состояние для хранения информации о транспорте
  const [numberAndTypeOfTransport, setNumberAndTypeOfTransport] = useState<Ibus>({
    number: 0,
    type: '',
  });

  // Обработчик изменения выбора
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedNumber = Number(event.target.value);
    const transportType = 

    setNumberAndTypeOfTransport({
      number: selectedNumber,
      type: transportType,
    });
  };

  return (
    <>
      <Image 
        src={'митакаасаМЭМ.webp'} 
        alt={"ФЕМЦЕЛКА🤑"}  
      />
      <h1 className="valeyu">
        оплата билета
      </h1>

      <select id="NumberSelect" onChange={handleSelectChange}>
        <option value="">Выберите номер</option>
        <option value="2">2</option>
        <option value="67">67</option>
        <option value="12">12</option>
        <option value="16">16</option>
        <option value="33">33</option>
        <option value="4">4</option>
        <option value="15">15</option>
        <option value="8">8</option>
      </select>


      <select id="TypeSelect" onChange={handleSelectChange}>
        <option value="">Выберите тип</option>
        <option value="автобус">автобус</option>
        <option value="троллейбус">троллейбус</option>
      </select>


      {/* Отображаем выбранный номер и тип транспорта */}
      {numberAndTypeOfTransport.number > 0 && numberAndTypeOfTransport.type != '' && (
        <p>Выбранный номер: {numberAndTypeOfTransport.number}, Тип: {numberAndTypeOfTransport.type}</p>
      )}

    </>
  );
}
