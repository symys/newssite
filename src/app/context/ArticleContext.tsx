"use client"; // Bu bileşenin client-side çalışacağını belirtir
/* eslint-disable @typescript-eslint/no-explicit-any */


import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// 1. ArticleContext oluşturuluyor
const ArticleContext = createContext<any>(null);

// 2. useArticle hook'u ile context'e erişim sağlanıyor
export const useArticle = () => useContext(ArticleContext);

// 3. Provider bileşeni
export const ArticleProvider = ({ children }: { children: ReactNode }) => {
  const [article, setArticle] = useState<any>(null); // article state ve setArticle fonksiyonu
  // 4. Sayfa yüklendiğinde localStorage'dan veriyi çekiyoruz
  useEffect(() => {
    const savedArticle = localStorage.getItem("currentArticle");
    if (savedArticle) {
      setArticle(JSON.parse(savedArticle)); // localStorage'daki veriyi state'e yüklüyoruz
    }
  }, []);

  // 5. Article her değiştiğinde localStorage'a kaydediyoruz
  useEffect(() => {
    if (article !== null) {
      localStorage.setItem("currentArticle", JSON.stringify(article));
    }
  }, [article]);

  return (
    <ArticleContext.Provider value={{ article, setArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};
