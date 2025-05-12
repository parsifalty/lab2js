/**
 * Возвращает массив уникальных типов транзакций.
 */
function getUniqueTransactionTypes(transactions) {
    return [...new Set(transactions.map(t => t.transaction_type))];
  }
  
  /**
   * Вычисляет сумму всех транзакций.
   */
  function calculateTotalAmount(transactions) {
    return transactions.reduce((sum, t) => sum + t.transaction_amount, 0);
  }
  
  /**
   * Возвращает транзакции указанного типа.
   */
  function getTransactionByType(transactions, type) {
    return transactions.filter(t => t.transaction_type === type);
  }
  
  /**
   * Возвращает массив транзакций в диапазоне дат.
   */
 /**
 * Возвращает массив транзакций в указанном диапазоне дат.
 */
function getTransactionsInDateRange(transactions, startDate, endDate) {
  const result = [];

  for (const transaction of transactions) {
      if (transaction.transaction_date >= startDate && transaction.transaction_date <= endDate) {
          result.push(transaction);
      }
  }

  return result;
}

/**
* Возвращает массив транзакций по названию магазина.
*/
function getTransactionsByMerchant(transactions, merchantName) {
  const result = [];

  for (const transaction of transactions) {
      if (transaction.merchant_name === merchantName) {
          result.push(transaction);
      }
  }

  return result;
}

/**
* Возвращает среднюю сумму транзакций.
*/
function calculateAverageTransactionAmount(transactions) {
  if (transactions.length === 0) {
      return 0;
  }

  let totalAmount = 0;

  for (const transaction of transactions) {
      totalAmount += transaction.transaction_amount;
  }

  return totalAmount / transactions.length;
}

/**
* Возвращает транзакции в заданном диапазоне сумм.
*/
function getTransactionsByAmountRange(transactions, minAmount, maxAmount) {
  const result = [];

  for (const transaction of transactions) {
      if (transaction.transaction_amount >= minAmount && transaction.transaction_amount <= maxAmount) {
          result.push(transaction);
      }
  }

  return result;
}

  
  /**
   * Вычисляет общую сумму дебетовых транзакций.
   */
  function calculateTotalDebitAmount(transactions) {
    return transactions
      .filter(t => t.transaction_type === "debit")
      .reduce((sum, t) => sum + t.transaction_amount, 0);
  }
  
  /**
   * Определяет месяц с наибольшим числом транзакций.
   */
  function findMostTransactionsMonth(transactions) {
    // Создаем объект для подсчета количества транзакций по месяцам
    const count = {};

    // Проходим по всем транзакциям
    for (const transaction of transactions) {
        // Получаем год и месяц из даты
        const month = transaction.transaction_date.slice(0, 7);

        // Увеличиваем счетчик для этого месяца
        if (count[month]) {
            count[month] += 1;
        } else {
            count[month] = 1;
        }
    }

    // Ищем месяц с максимальным количеством транзакций
    let mostFrequentMonth = "";
    let maxCount = 0;

    for (const month in count) {
        if (count[month] > maxCount) {
            maxCount = count[month];
            mostFrequentMonth = month;
        }
    }

    return mostFrequentMonth;
}

  
  /**
   * Определяет каких транзакций больше.
   */
  function mostTransactionTypes(transactions) {
    const debitCount = transactions.filter(t => t.transaction_type === "debit").length;
    const creditCount = transactions.filter(t => t.transaction_type === "credit").length;
    
    if (debitCount === creditCount) {
        return "equal";
    } else if (debitCount > creditCount) {
        return "debit";
    } else {
        return "credit";
    }
}

  /**
   * Возвращает транзакции, совершенные до указанной даты.
   */
  function getTransactionsBeforeDate(transactions, date) {
    return transactions.filter(t => t.transaction_date < date);
  }
  
  /**
   * Возвращает транзакцию по ID.
   */
  function findTransactionById(transactions, id) {
    return transactions.find(t => t.transaction_id === id) || null;
  }
  
  /**
   * Возвращает массив описаний транзакций.
   */
  function mapTransactionDescriptions(transactions) {
    return transactions.map(t => t.transaction_description);
  }
  
  module.exports = {
    getUniqueTransactionTypes,
    calculateTotalAmount,
    getTransactionByType,
    getTransactionsInDateRange,
    getTransactionsByMerchant,
    calculateAverageTransactionAmount,
    getTransactionsByAmountRange,
    calculateTotalDebitAmount,
    findMostTransactionsMonth,
    mostTransactionTypes,
    getTransactionsBeforeDate,
    findTransactionById,
    mapTransactionDescriptions,
  };
  