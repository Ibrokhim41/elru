import { FiChevronLeft } from "react-icons/fi"
import { FaBoxOpen, FaTruckLoading } from "react-icons/fa"
import { GiWallet } from "react-icons/gi"
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Thanks from "components/Modals/Thanks";
import { setThanks } from "redux/modals";
import { useTranslation } from 'react-i18next';

const Order = () => {

    const route = useHistory()
    const deliveryTo = useSelector(state => state.modals.deliveryTo)
    const dispatch = useDispatch()
    const {t} = useTranslation();


    return (
        <>
            <Thanks />
            <div className="container mx-auto mb-14">
                {/* back */}
                <div
                    onClick={() => route.push('/basket')}
                    className="text-blue text-lg font-medium flex items-center cursor-pointer my-4"><FiChevronLeft className="text-2xl" />Назад</div>
                <div className="text-black ctext-base font-bold">{t("delivery_to")}: <span className="text-grey-dark font-normal">{deliveryTo}</span></div>

                <div className="grid grid-cols-12">
                    {/* sum */}
                    <div className="col-span-12 xl:col-span-8 bg-grey-light rounded-md border border-grey-border py-4 flex flex-col md:flex-row items-center justify-around mt-4">
                        <div className="flex items-center">
                            <FaBoxOpen className="text-blue text-2xl mr-2" />
                            <div className="text-black text-base font-bold">Товары: <span className="text-grey-dark font-normal">1 250 000 сум</span></div>
                        </div>
                        <div className="flex items-center my-4">
                            <FaTruckLoading className="text-blue text-2xl mr-2" />
                            <div className="text-black text-base font-bold">Доставка: <span className="text-grey-dark font-normal">1 250 000 сум</span></div>
                        </div>
                        <div className="flex items-center">
                            <GiWallet className="text-blue text-2xl mr-2" />
                            <div className="text-black text-base font-bold">Итоговая сумма: <span className="text-grey-dark font-normal">1 250 000 сум</span></div>
                        </div>
                    </div>

                    {/* info */}
                    <div className="col-span-12 xl:col-span-8 mt-6">
                        <div className="text-grey-dark ctext-base font-medium">Район, номер дома или квартиры,ориентир<span className="text-red">*</span></div>
                        <input type="text" placeholder="Введите адрес" className="border border-grey-border rounded-md p-4 focus:outline-none focus:border-blue w-full text-grey-dark text-base font-medium mt-2" />
                        <div className="grid grid-cols-12 gap-y-4 md:gap-8 mt-6">
                            <div className="col-span-12 md:col-span-6">
                                <div className="text-grey-dark ctext-base font-medium">Контактное лицо<span className="text-red">*</span></div>
                                <input type="text" placeholder="Введите имя" className="border border-grey-border rounded-md p-4 focus:outline-none focus:border-blue w-full text-grey-dark text-base font-medium mt-2" />
                            </div>
                            <div className="col-span-12 md:col-span-6">
                                <div className="text-grey-dark ctext-base font-medium">Контактный телефон<span className="text-red">*</span></div>
                                <input type="text" placeholder="Введите номер" className="border border-grey-border rounded-md p-4 focus:outline-none focus:border-blue w-full text-grey-dark text-base font-medium mt-2" />
                            </div>
                        </div>
                    </div>

                    {/* paymet-type */}
                    <div className="col-span-12 xl:col-span-8 mt-6">
                        <div className="text-black ctext-base font-bold mb-4">Выберите способ оплаты:</div>
                        <div className="flex flex-col sm:flex-row">
                            <div className="flex items-center">
                                <input id="balance" type="radio" name="payment" className="cursor-pointer w-7 h-7 border-grey-border" />
                                <label for="balance" className="ml-2 cursor-pointer">
                                    <div className="text-grey-dark ctext-lg font-bold">Снять с баланса</div>
                                    <div className="text-grey-dark ctext-sm">Ваш баланс: 123 000 000 сум</div>
                                </label>
                            </div>
                            <div className="flex items-center mt-4 sm:mt-0 sm:ml-6">
                                <input id="click" type="radio" name="payment" className="cursor-pointer w-7 h-7 border-grey-border" />
                                <label for="click" className="ml-2 cursor-pointer">
                                    <div className="text-grey-dark ctext-lg font-bold">Click</div>
                                </label>
                            </div>
                            <div className="flex items-center mt-4 sm:mt-0 sm:ml-6">
                                <input id="payme" type="radio" name="payment" className="cursor-pointer w-7 h-7 border-grey-border" />
                                <label for="payme" className="ml-2 cursor-pointer">
                                    <div className="text-grey-dark ctext-lg font-bold">Payme</div>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* order */}
                    <button 
                        onClick={() => dispatch(setThanks(true))}
                        className="text-white ctext-base font-bold bg-blue col-span-12 xl:col-span-8 mt-8 py-4 rounded-md">Оформить заказ</button>
                </div>
            </div>
        </>
    )
}

export default Order;