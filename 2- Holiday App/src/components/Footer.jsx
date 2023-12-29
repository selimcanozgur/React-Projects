function Footer({ bagSize, items }) {
  // Formül = Çantanın içindekiler  / paketlenen sayısı = çantanın doluluk yüzdesi
  let packedCount = items.filter((item) => item.packed).length;
  let bagFull = Math.round((packedCount / bagSize) * 100);

  return (
    <div className="flex justify-center bg-slate-300">
      <p className="text-2xl uppercase font-semibold">
        {bagFull === 100
          ? `The bag is all packed, have a nice trip. ✈`
          : `Bag %${bagFull} packed
`}
      </p>
    </div>
  );
}

export default Footer;
