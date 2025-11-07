'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating persuasive headlines for a sales page.
 *
 * It takes the desired product and optionally existing headlines as input and returns a list of persuasive headlines.
 *
 * @param {GeneratePersuasiveHeadlineInput} input - The input for the flow, including the product name and optional existing headlines.
 * @returns {Promise<GeneratePersuasiveHeadlineOutput>} - A promise that resolves to an object containing an array of generated persuasive headlines.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersuasiveHeadlineInputSchema = z.object({
  product: z.string().describe('The name of the product being sold.'),
  existingHeadlines: z
    .array(z.string())
    .optional()
    .describe('Optional existing headlines to use as inspiration.'),
});

export type GeneratePersuasiveHeadlineInput = z.infer<
  typeof GeneratePersuasiveHeadlineInputSchema
>;

const GeneratePersuasiveHeadlineOutputSchema = z.object({
  headlines: z
    .array(z.string())
    .describe('An array of generated persuasive headlines.'),
});

export type GeneratePersuasiveHeadlineOutput = z.infer<
  typeof GeneratePersuasiveHeadlineOutputSchema
>;

export async function generatePersuasiveHeadline(
  input: GeneratePersuasiveHeadlineInput
): Promise<GeneratePersuasiveHeadlineOutput> {
  return generatePersuasiveHeadlineFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersuasiveHeadlinePrompt',
  input: {schema: GeneratePersuasiveHeadlineInputSchema},
  output: {schema: GeneratePersuasiveHeadlineOutputSchema},
  prompt: `You are an expert copywriter specializing in persuasive sales headlines.

  Generate 5 persuasive headlines for the following product, designed to entice the user to purchase the product.

  Product: {{{product}}}

  The headlines should focus on the benefits of earning in dollars and create a sense of urgency.

  Existing Headlines (optional, for inspiration only): {{#if existingHeadlines}}{{{existingHeadlines}}}{{else}}None{{/if}}

  The headlines should be short, attention-grabbing, and benefit-driven.

  Ensure the headlines are unique and do not repeat each other.

  Output ONLY the headlines in a JSON array of strings.
  `,
});

const generatePersuasiveHeadlineFlow = ai.defineFlow(
  {
    name: 'generatePersuasiveHeadlineFlow',
    inputSchema: GeneratePersuasiveHeadlineInputSchema,
    outputSchema: GeneratePersuasiveHeadlineOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
