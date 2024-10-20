'use client'; // Bu bileşenin client-side çalışacağını belirtir

import { createContext, useContext, useState, ReactNode } from 'react';

// 1. ArticleContext oluşturuluyor
const ArticleContext = createContext<any>(null);

// 2. useArticle hook'u ile context'e erişim sağlanıyor
export const useArticle = () => useContext(ArticleContext);

// 3. Provider bileşeni
export const ArticleProvider = ({ children }: { children: ReactNode }) => {
  const [article, setArticle] = useState<any>(null); // article state ve setArticle fonksiyonu

  return (
    <ArticleContext.Provider value={{ article, setArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};
