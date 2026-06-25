import { MOCK_CATEGORIES } from "../mock/category";

export async function fetchCategories(limit? : number) {
    await new Promise(res => setTimeout(res, 800));
    return limit ? MOCK_CATEGORIES.slice(0, limit) : MOCK_CATEGORIES;
}