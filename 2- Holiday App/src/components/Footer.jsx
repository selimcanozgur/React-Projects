function Footer({ bagSize, items }) {
  // Formül = Çantanın içindekiler  / paketlenen sayısı = çantanın doluluk yüzdesi
  let packedCount = items.filter((item) => item.packed).length;
  let bagFull = Math.round((packedCount / bagSize) * 100);

  return (
    <footer className="flex justify-center footerStyle my-8">
      <p className="text-xl uppercase font-semibold  py-6">
        {bagFull === 100
          ? `The bag is all packed, have a nice trip. ✈`
          : `Bag %${bagFull} packed
`}
      </p>
    </footer>
  );
}

export default Footer;
