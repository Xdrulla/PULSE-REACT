const Product = require('../models/Estoque');

const productController = {
    getAllProducts: async (req, res) => {
        try {
            const products = await Product.findAll();
            res.json(products);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch products' });
        }
    },

    createProduct: async (req, res) => {
        const { nome_produto, codigo_barras, tipo_produto, estoque_total, estoque_disponivel, valor_varejo, valor_atacado } = req.body;
        try {
            const newProduct = await Product.create({ nome_produto, codigo_barras, tipo_produto, estoque_total, estoque_disponivel, valor_varejo, valor_atacado });
            res.json(newProduct);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create product'});
        }
    },

    updateProduct: async (req, res) => {
        const { id } = req.params;
        const { nome_produto, codigo_barras, tipo_produto, estoque_total, estoque_disponivel, valor_varejo, valor_atacado } = req.body;
        try {
            const product = await Product.findByPk(id);
            if(!product) {
                return res.status(404).json({ error: 'Product not found' });
            }

            await product.update({ nome_produto, codigo_barras,  tipo_produto, estoque_total, estoque_disponivel, valor_varejo, valor_atacado});
            res.json(product);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update product' });
        }
    },

    deleteProduct: async (req, res) => {
        const { id } = req.params;
        try {
            const product = await Product.findByPk(id);
            if(!product) {
                return res.status(404).json({ error: 'Product not found' });
            }

            await product.destroy();
            res.json({ message: 'Product deleted successufully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete product' });
        }
    },
};

module.exports = productController;
